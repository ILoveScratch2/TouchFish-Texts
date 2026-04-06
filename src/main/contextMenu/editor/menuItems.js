// NOTE: This are mutable fields that may change at runtime.
import { t } from '../../i18n'

export const CUT = {
  get label () { return t('contextMenuEditor.cut') },
  id: 'cutMenuItem',
  role: 'cut'
}

export const COPY = {
  get label () { return t('contextMenuEditor.copy') },
  id: 'copyMenuItem',
  role: 'copy'
}

export const PASTE = {
  get label () { return t('contextMenuEditor.paste') },
  id: 'pasteMenuItem',
  role: 'paste'
}

export const COPY_AS_MARKDOWN = {
  get label () { return t('contextMenuEditor.copyAsMarkdown') },
  id: 'copyAsMarkdownMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-copy-as-markdown')
  }
}

export const COPY_AS_HTML = {
  get label () { return t('contextMenuEditor.copyAsHtml') },
  id: 'copyAsHtmlMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-copy-as-html')
  }
}

export const PASTE_AS_PLAIN_TEXT = {
  get label () { return t('contextMenuEditor.pasteAsPlainText') },
  id: 'pasteAsPlainTextMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-paste-as-plain-text')
  }
}

export const INSERT_BEFORE = {
  get label () { return t('contextMenuEditor.insertBefore') },
  id: 'insertParagraphBeforeMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-insert-paragraph', 'before')
  }
}

export const INSERT_AFTER = {
  get label () { return t('contextMenuEditor.insertAfter') },
  id: 'insertParagraphAfterMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-insert-paragraph', 'after')
  }
}

export const SEPARATOR = {
  type: 'separator'
}
