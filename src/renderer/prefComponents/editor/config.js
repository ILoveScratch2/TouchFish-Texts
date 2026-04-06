import { ENCODING_NAME_MAP } from 'common/encoding'
import i18n from '@/i18n'

export const tabSizeOptions = [{
  label: '1',
  value: 1
}, {
  label: '2',
  value: 2
}, {
  label: '3',
  value: 3
}, {
  label: '4',
  value: 4
}]

export const endOfLineOptions = [{
  get label () { return i18n.t('prefEditorOptions.endOfLineDefault') },
  value: 'default'
}, {
  get label () { return i18n.t('menu.crlf') },
  value: 'crlf'
}, {
  get label () { return i18n.t('menu.lf') },
  value: 'lf'
}]

export const trimTrailingNewlineOptions = [{
  get label () { return i18n.t('prefEditorOptions.trimAllTrailing') },
  value: 0
}, {
  get label () { return i18n.t('prefEditorOptions.trimOneTrailing') },
  value: 1
}, {
  get label () { return i18n.t('prefEditorOptions.preserveLineEndings') },
  value: 2
}, {
  get label () { return i18n.t('prefEditorOptions.doNothing') },
  value: 3
}]

export const textDirectionOptions = [{
  get label () { return i18n.t('prefEditorOptions.textLtr') },
  value: 'ltr'
}, {
  get label () { return i18n.t('prefEditorOptions.textRtl') },
  value: 'rtl'
}]

let defaultEncodingOptions = null
export const getDefaultEncodingOptions = () => {
  if (defaultEncodingOptions) {
    return defaultEncodingOptions
  }

  defaultEncodingOptions = []
  for (const [value, label] of Object.entries(ENCODING_NAME_MAP)) {
    defaultEncodingOptions.push({ label, value })
  }
  return defaultEncodingOptions
}
