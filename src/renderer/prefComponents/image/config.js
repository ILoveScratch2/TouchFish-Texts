import i18n from '@/i18n'

export const imageActions = [{
  get label () { return i18n.t('prefImageOptions.actionUpload') },
  value: 'upload'
}, {
  get label () { return i18n.t('prefImageOptions.actionFolder') },
  value: 'folder'
}, {
  get label () { return i18n.t('prefImageOptions.actionPath') },
  value: 'path'
}]
