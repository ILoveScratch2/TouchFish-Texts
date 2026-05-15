<template>
  <div class="pref-theme">
    <h4>{{ $t('prefTheme.title') }}</h4>
    <section class="offcial-themes">
      <div v-for="t of themes" :key="t.name" class="theme"
        :class="[t.custom ? 'custom-theme' : t.name, { 'active': t.name === theme }]"
        :ref="t.name"
        @click="onSelectChange('theme', t.name)"
      >
        <div v-html="t.html"></div>
        <span v-if="t.custom" class="remove-btn" :title="$t('prefTheme.removeTheme')" @click.stop="removeTheme(t.name)">&times;</span>
      </div>
    </section>
    <separator></separator>
    <cur-select
      :description="$t('prefTheme.autoSwitch')"
      :value="autoSwitchTheme"
      :options="autoSwitchThemeOptions"
      :onChange="value => onSelectChange('autoSwitchTheme', value)"
    ></cur-select>
    <separator></separator>
    <section class="import-themes">
      <div>
        <span>{{ $t('prefTheme.importTheme') }}</span>
        <el-button size="small" @click="importTheme">{{ $t('prefTheme.importThemeButton') }}</el-button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import themeMd from './theme.md'
import { getAllThemes, autoSwitchThemeOptions } from './config'
import markdownToHtml from '@/util/markdownToHtml'
import CurSelect from '../common/select'
import Separator from '../common/separator'

export default {
  components: {
    CurSelect,
    Separator
  },
  data () {
    this.autoSwitchThemeOptions = autoSwitchThemeOptions
    return {
      themes: []
    }
  },
  computed: {
    ...mapState({
      autoSwitchTheme: state => state.preferences.autoSwitchTheme,
      theme: state => state.preferences.theme,
      customThemes: state => state.preferences.customThemes
    })
  },
  watch: {
    customThemes () {
      this.renderThemes()
    }
  },
  created () {
    this.renderThemes()
    this.$nextTick(() => {
      this.listenForImports()
    })
  },
  methods: {
    async renderThemes () {
      const allThemes = getAllThemes(this.customThemes)
      const newThemes = []
      for (const theme of allThemes) {
        const markdown = theme.custom
          ? themeMd.replace(/{theme}/, theme.name + ' ' + this.$t('prefTheme.customTag'))
          : themeMd.replace(/{theme}/, theme.name)
        const html = await markdownToHtml(markdown)
        newThemes.push({
          name: theme.name,
          custom: theme.custom || false,
          html
        })
      }
      this.themes = newThemes

      // Inject custom theme CSS for preview cards
      this.$nextTick(() => {
        for (const ct of (this.customThemes || [])) {
          const el = this.$refs[ct.name]
          if (!el || !el[0]) continue
          let styleEl = el[0].querySelector('.custom-preview-style')
          if (!styleEl) {
            styleEl = document.createElement('style')
            styleEl.className = 'custom-preview-style'
            styleEl.innerHTML = ct.css
            el[0].appendChild(styleEl)
          }
        }
      })
    },
    onSelectChange (type, value) {
      this.$store.dispatch('SET_SINGLE_PREFERENCE', { type, value })
    },
    importTheme () {
      this.$store.dispatch('IMPORT_CUSTOM_THEME')
    },
    removeTheme (name) {
      if (this.theme === name) {
        this.onSelectChange('theme', 'light')
      }
      this.$store.dispatch('REMOVE_CUSTOM_THEME', name)
    },
    listenForImports () {
      const { ipcRenderer } = require('electron')
      ipcRenderer.on('mt::custom-themes-imported', () => {
        // Refresh preferences to get updated customThemes
        this.$store.dispatch('ASK_FOR_USER_PREFERENCE')
      })
    }
  }
}
</script>

<style>
  .offcial-themes {
    margin-top: 12px;
    & .theme {
      cursor: pointer;
      width: 248px;
      height: 100px;
      margin: 0px 20px 10px 20px;
      padding-left: 30px;
      padding-top: 20px;
      overflow: hidden;
      display: inline-block;
      background: var(--editorBgColor);
      color: var(--editorColor);
      box-sizing: border-box;
      box-shadow: 0 9px 28px -9px rgba(0, 0, 0, .4);
      border-radius: 5px;
      position: relative;
      &.custom-theme {
        color: var(--editorColor);
        background: var(--editorBgColor);
      }
      & .remove-btn {
        position: absolute;
        top: 4px;
        right: 8px;
        cursor: pointer;
        font-size: 18px;
        opacity: 0;
        transition: opacity .2s;
        color: var(--editorColor);
        line-height: 1;
        &:hover {
          color: #f56c6c;
        }
      }
      &:hover .remove-btn {
        opacity: .7;
      }
      &.dark {
        color: rgba(255, 255, 255, .7);
        background: #282828;
        & a {
          color: #409eff;
        }
      }
      &.light {
        color: rgba(0, 0, 0, .7);
        background: rgba(255, 255, 255, 1);
        & a {
          color: rgba(33, 181, 111, 1);;
        }
      }
      &.graphite {
        color: rgba(43, 48, 50, .7);
        background: #f7f7f7;
        & a {
          color: rgb(104, 134, 170);
        }
      }
      &.material-dark {
        color: rgba(171, 178, 191, .8);
        background: #34393f;
        & a {
          color: #f48237;
        }
      }
      &.one-dark {
        color: #9da5b4;
        background: #282c34;
        & a {
          color: rgba(226, 192, 141, 1);
        }
      }
      &.ulysses {
        color: rgba(101, 101, 101, .7);
        background: #f3f3f3;
        & a {
          color: rgb(12, 139, 186);
        }
      }
    }
    & .theme.active {
      box-shadow: var(--floatShadow);
    }
    & h3 {
      margin: 0;
      font-size: 16px;
      color: currentColor;
      cursor: pointer;
      &::before {
        content: 'h3';
        position: absolute;
        top: 4px;
        left: -20px;
        display: block;
        width: 10px;
        height: 10px;
        font-size: 12px;
        opacity: .5;
      }
    }
    & p {
      font-size: 12px;
    }
  }
  .import-themes {
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    color: var(--editorColor);
    & > div {
      display: flex;
      flex-direction: column;
      & > span {
        display: inline-block;
        margin-bottom: 20px;
      }
    }
  }
</style>
