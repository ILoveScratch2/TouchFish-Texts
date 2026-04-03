<template>
  <div class="about-dialog">
    <el-dialog
      :visible.sync="showAboutDialog"
      :show-close="false"
      :modal="true"
      custom-class="ag-dialog-table"
      width="400px"
    >
      <img class="logo" :src="logo" />
      <el-row>
        <el-col :span="24">
          <h3 class="title">{{ name }}</h3>
        </el-col>
        <el-col :span="24">
          <div class="text">{{ appVersion }}</div>
        </el-col>
        <el-col :span="24">
          <div class="text description">{{ description }}</div>
        </el-col>
        <el-col :span="24">
          <div class="text" style="min-height: auto">{{ copyright }}</div>
        </el-col>
        <el-col :span="24">
          <div class="github-link">
            <el-button type="text" @click="openGitHub">GitHub</el-button>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import bus from '../../bus'
import TouchFishTextsLogo from '../../assets/images/logo.png'

export default {
  data () {
    this.name = 'TouchFish Texts'
    this.description = 'The markdown editor just you want.'
    this.copyright = `Copyright © 2017-${new Date().getFullYear()} Luo Ran`
    this.logo = TouchFishTextsLogo
    return {
      showAboutDialog: false
    }
  },
  computed: {
    ...mapState({
      appVersion: state => state.appVersion
    })
  },
  created () {
    bus.$on('aboutDialog', this.showDialog)
  },
  beforeDestroy () {
    bus.$off('aboutDialog', this.showDialog)
  },
  methods: {
    showDialog () {
      this.showAboutDialog = true
      bus.$emit('editor-blur')
    },
    openGitHub () {
      require('electron').shell.openExternal('https://github.com/ILoveScratch2/TouchFish-Texts')
    }
  }
}
</script>

<style>
  .about-dialog el-row,
  .about-dialog el-col {
    display: block;
  }

  .about-dialog img.logo {
    width: 80px;
    height: 80px;
    display: inherit;
    margin: 0 auto;
  }

  .about-dialog .title,
  .about-dialog .text {
    min-height: 32px;
    text-align: center;
  }

  .about-dialog .title {
    color: var(--floatFontColor);
  }

  .about-dialog .text {
    color: var(--floatFontColor);
  }

  .about-dialog .text.description {
    font-size: 13px;
    opacity: 0.8;
    padding: 4px 16px;
  }

  .about-dialog .github-link {
    text-align: center;
    margin-top: 8px;
  }
</style>
