import i18n from '@/i18n'

export const bulletListMarkerOptions = [{
  label: '*',
  value: '*'
}, {
  label: '-',
  value: '-'
}, {
  label: '+',
  value: '+'
}]

export const orderListDelimiterOptions = [{
  label: '.',
  value: '.'
}, {
  label: ')',
  value: ')'
}]

export const preferHeadingStyleOptions = [{
  get label () { return i18n.t('prefMarkdownOptions.headingAtx') },
  value: 'atx'
}, {
  get label () { return i18n.t('prefMarkdownOptions.headingSetext') },
  value: 'setext'
}]

export const listIndentationOptions = [{
  get label () { return i18n.t('prefMarkdownOptions.indentDocFx') },
  value: 'dfm'
}, {
  get label () { return i18n.t('prefMarkdownOptions.indentTab') },
  value: 'tab'
}, {
  get label () { return i18n.t('prefMarkdownOptions.indentSpace1') },
  value: 1
}, {
  get label () { return i18n.t('prefMarkdownOptions.indentSpace2') },
  value: 2
}, {
  get label () { return i18n.t('prefMarkdownOptions.indentSpace3') },
  value: 3
}, {
  get label () { return i18n.t('prefMarkdownOptions.indentSpace4') },
  value: 4
}]

export const frontmatterTypeOptions = [{
  label: 'YAML',
  value: '-'
}, {
  label: 'TOML',
  value: '+'
}, {
  label: 'JSON (;;;)',
  value: ';'
}, {
  label: 'JSON ({})',
  value: '{'
}]

export const sequenceThemeOptions = [{
  get label () { return i18n.t('prefMarkdownOptions.sequenceHand') },
  value: 'hand'
}, {
  get label () { return i18n.t('prefMarkdownOptions.sequenceSimple') },
  value: 'simple'
}]
