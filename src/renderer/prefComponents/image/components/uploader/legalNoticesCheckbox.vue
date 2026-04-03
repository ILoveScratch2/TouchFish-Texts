<template>
  <div class="pref-cb-legal-notices">
    <el-checkbox v-model="uploaderService.agreedToLegalNotices"></el-checkbox>
    <span>
      {{ $t('legalNotices.agreePrefix', { name: uploaderService.name }) }}
      <span class="link" @click="openUrl(uploaderService.privacyUrl)">{{ $t('legalNotices.privacyStatement') }}</span>
      {{ $t('legalNotices.and') }}
      <span class="link" @click="openUrl(uploaderService.tosUrl)">{{ $t('legalNotices.termsOfService') }}</span>.
      <span v-if="!uploaderService.isGdprCompliant">{{ $t('legalNotices.gdprNotice') }}</span>
    </span>
  </div>
</template>

<script>
import { shell } from 'electron'

export default {
  data () {
    return {}
  },
  props: {
    uploaderService: Object
  },
  methods: {
    openUrl (link) {
      if (link) {
        shell.openExternal(link)
      }
    }
  }
}
</script>

<style>
.pref-cb-legal-notices {
  border: 1px solid transparent;
  padding: 3px 5px;
  & .el-checkbox {
    margin-right: 0;
  }
}
</style>
