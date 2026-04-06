import i18n from '@/i18n'

export const pageSizeList = [
  {
    label: 'A3 (297mm x 420mm)',
    value: 'A3'
  }, {
    label: 'A4 (210mm x 297mm)',
    value: 'A4'
  }, {
    label: 'A5 (148mm x 210mm)',
    value: 'A5'
  }, {
    label: 'US Legal (8.5" x 13")',
    value: 'Legal'
  }, {
    label: 'US Letter (8.5" x 11")',
    value: 'Letter'
  }, {
    label: 'Tabloid (17" x 11")',
    value: 'Tabloid'
  }, {
    get label () { return i18n.t('exportSettings.pageCustom') },
    value: 'custom'
  }
]

export const headerFooterTypes = [
  {
    get label () { return i18n.t('exportOptions.headerFooterNone') },
    value: 0
  }, {
    get label () { return i18n.t('exportOptions.headerFooterSingle') },
    value: 1
  }, {
    get label () { return i18n.t('exportOptions.headerFooterThree') },
    value: 2
  }
]

export const headerFooterStyles = [
  {
    get label () { return i18n.t('exportOptions.headerFooterStyleDefault') },
    value: 0
  }, {
    get label () { return i18n.t('exportOptions.headerFooterStyleSimple') },
    value: 1
  }, {
    get label () { return i18n.t('exportOptions.headerFooterStyleStyled') },
    value: 2
  }
]

export const exportThemeList = [{
  label: 'Academic',
  value: 'academic'
}, {
  label: 'GitHub (Default)',
  value: 'default'
}, {
  label: 'Liber',
  value: 'liber'
}]
