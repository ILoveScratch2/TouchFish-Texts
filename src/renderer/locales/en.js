export default {
  // App
  app: {
    title: 'TouchFish Texts',
    description: 'The markdown editor just you want.',
    copyright: 'Copyright © 2026-{year} ILoveScratch2',
    save: 'Save'
  },

  // About dialog
  about: {
    github: 'GitHub'
  },

  // Title bar
  titleBar: {
    words: 'Words',
    characters: 'Characters',
    paragraphs: 'Paragraphs',
    wordShort: 'W',
    characterShort: 'C',
    paragraphShort: 'P',
    allShort: 'A',
    wordFull: 'word',
    characterFull: 'character',
    paragraphFull: 'paragraph',
    allFull: '(with space)character'
  },

  // Command palette
  commandPalette: {
    placeholder: 'Type a command to execute'
  },

  // Search bar (editor inline search)
  search: {
    searchPlaceholder: 'Search',
    replacePlaceholder: 'Replacement',
    caseSensitive: 'Case Sensitive',
    wholeWord: 'Select whole word',
    useRegex: 'Use query as RegEx',
    replaceAll: 'Replace All',
    replaceSingle: 'Replace Single'
  },

  // Recent / Import page
  recent: {
    newFile: 'New File',
    importTitle: 'Import or Open',
    dropHere: 'Drop here to get you stuff into TouchFish Texts'
  },

  // Export settings dialog
  exportSettings: {
    title: 'Export Options',
    infoText: 'Please customize the page appearance and click on "export" to continue.',
    tabInfo: 'Info',
    tabPage: 'Page',
    tabStyle: 'Style',
    tabTheme: 'Theme',
    tabHeaderFooter: 'Header & Footer',
    tabToc: 'Table of Contents',
    pageTitle: 'The page title:',
    pageSize: 'Page size:',
    widthHeightMm: 'Width/Height in mm:',
    landscapeOrientation: 'Landscape orientation:',
    pageMarginMm: 'Page margin in mm:',
    topBottom: 'Top/Bottom:',
    leftRight: 'Left/Right:',
    overwriteFont: 'Overwrite theme font settings:',
    fontFamily: 'Font family:',
    fontSize: 'Font size',
    lineHeight: 'Line height',
    autoNumberHeadings: 'Auto numbering headings:',
    showFrontMatter: 'Show front matter:',
    themeText: 'You can change the document appearance by choosing a theme or create a handcrafted one.',
    theme: 'Theme:',
    headerFooterText: 'The text appear on all pages if header and/or footer is defined.',
    headerType: 'Header type:',
    leftHeaderText: 'The left header text:',
    mainHeaderText: 'The main header text:',
    rightHeaderText: 'The right header text:',
    footerType: 'Footer type:',
    leftFooterText: 'The left footer text:',
    mainFooterText: 'The main footer text:',
    rightFooterText: 'The right footer text:',
    customizeStyle: 'Customize style:',
    allowStyledHeaderFooter: 'Allow styled header and footer:',
    headerFooterFontSize: 'Header and footer font size',
    includeTopHeading: 'Include top heading:',
    includeTopHeadingDetail: 'Includes the first heading level too.',
    tocTitle: 'Title:',
    exportButton: 'Export...'
  },

  // Sidebar - tree
  sideBar: {
    openedFiles: 'Opened files',
    saveAll: 'Save All',
    closeAll: 'Close All',
    emptyProject: 'Empty project',
    createFile: 'Create File',
    openFolder: 'Open Folder',
    tableOfContents: 'Table Of Contents'
  },

  // Sidebar - folder search
  sideBarSearch: {
    placeholder: 'Search in folder...',
    caseSensitive: 'Case Sensitive',
    wholeWord: 'Select whole word',
    useRegex: 'Use query as RegEx',
    noFolderOpen: 'No folder open',
    noResultsFound: 'No results found.',
    cancel: 'Cancel',
    showMoreMatches: 'Show more matches',
    openFolder: 'Open Folder',
    match: 'match',
    matches: 'matches',
    in: 'in',
    file: 'file',
    files: 'files'
  },

  // Editor notifications
  editor: {
    ok: 'Ok'
  },

  // Preferences sidebar
  prefSidebar: {
    title: 'Preferences',
    searchPlaceholder: 'Search preferences',
    general: 'General',
    editor: 'Editor',
    markdown: 'Markdown',
    spelling: 'Spelling',
    theme: 'Theme',
    image: 'Image',
    keyBindings: 'Key Bindings'
  },

  // Preferences - General
  prefGeneral: {
    title: 'General',
    autoSaveTitle: 'Auto Save:',
    autoSave: 'Automatically save document changes',
    autoSaveDelay: 'Delay following document edit before automatically saving',
    windowTitle: 'Window:',
    titleBarStyle: 'Title bar style',
    requiresRestart: 'Requires restart.',
    hideScrollbar: 'Hide scrollbars',
    openFilesNewWindow: 'Open files in new window',
    openFolderNewWindow: 'Open folders in new window',
    zoom: 'Zoom',
    sidebarTitle: 'Sidebar:',
    wordWrapToc: 'Wrap text in table of contents',
    fileSortBy: 'Sort field for files in open folders',
    startupTitle: 'Action on startup:',
    openDefaultDir: 'Open the default directory',
    openBlankPage: 'Open a blank page',
    selectFolder: 'Select Folder',
    miscTitle: 'Misc:',
    language: 'User interface language'
  },

  // Preferences - Editor
  prefEditor: {
    title: 'Editor',
    textEditorTitle: 'Text editor settings:',
    fontSize: 'Font size',
    lineHeight: 'Line height',
    fontFamily: 'Font family',
    editorLineWidth: 'Maximum width of text editor',
    editorLineWidthNotes: "Leave empty for theme default, otherwise use number with unit suffix, which is one of 'ch' for characters, 'px' for pixels, or '%' for percentage.",
    codeBlockTitle: 'Code block settings:',
    writingBehaviorTitle: 'Writing behavior:',
    trimCodeBlockEmptyLines: 'Remove leading and trailing empty lines',
    autoPairBracket: 'Automatically close brackets when writing',
    autoPairMarkdownSyntax: 'Automatically complete markdown syntax',
    autoPairQuote: 'Automatically close quotation marks',
    tabSize: 'Preferred tab width',
    fileRepresentationTitle: 'File representation:',
    endOfLine: 'Line separator type',
    defaultEncoding: 'Default encoding',
    autoGuessEncoding: 'Automatically detect file encoding',
    trimTrailingNewline: 'Handling of trailing newline characters',
    miscTitle: 'Misc:',
    textDirection: 'Text direction',
    hideQuickInsertHint: 'Hide hint for selecting type of new paragraph',
    hideLinkPopup: 'Hide popup when cursor is over link',
    autoCheck: 'Whether to automatically check any related tasks'
  },

  // Preferences - Markdown
  prefMarkdown: {
    title: 'Markdown',
    listsTitle: 'Lists:',
    preferLooseListItem: 'Prefer loose list items',
    bulletListMarker: 'Preferred marker for bullet lists',
    orderListDelimiter: 'Preferred marker for ordered lists',
    listIndentation: 'Preferred list indentation',
    extensionsTitle: 'Markdown extensions:',
    frontmatterType: 'Front matter format',
    superSubScript: 'Enable Pandoc-style superscript and subscript',
    footnote: 'Enable Pandoc-style footnotes',
    footnoteNotes: 'Requires restart.',
    compatibilityTitle: 'Compatibility:',
    isHtmlEnabled: 'Enable HTML rendering',
    isGitlabCompatibilityEnabled: 'Enable GitLab compatibility mode',
    diagramsTitle: 'Diagrams:',
    sequenceTheme: 'Sequence diagram theme',
    miscTitle: 'Misc:',
    preferHeadingStyle: 'Preferred heading style'
  },

  // Preferences - Theme
  prefTheme: {
    title: 'Theme',
    autoSwitch: 'Automatically adjust application theme according to system settings',
    openThemeFolder: 'Open the themes folder',
    openFolder: 'Open Folder',
    importTheme: 'Import custom themes',
    importThemeButton: 'Import Theme'
  },

  // Preferences - Spellchecker
  prefSpelling: {
    title: 'Spelling',
    enabled: 'Enable spell checking',
    noUnderline: 'Hide marks for spelling errors',
    autoDetect: 'Automatically detect document language',
    language: 'Default language for spell checking',
    macOsNote: 'The used language will be detected automatically while typing. Additional languages may be added through "Language & Region" in your system preferences pane.',
    customDictTitle: 'Custom dictionary:',
    editCustomDict: 'Edit words in custom dictionary.',
    noWords: 'No words available',
    wordColumn: 'Word',
    optionsColumn: 'Options',
    deleteWord: 'Delete',
    errorSwitchLanguage: 'Failed to switch language',
    errorRemoveWord: 'Failed to remove custom word',
    errorSave: 'An unexpected error occurred while saving.'
  },

  // Preferences - Image
  prefImage: {
    title: 'Image',
    defaultAction: 'Default action after an image is inserted from local folder or clipboard',
    clipboardNote: 'Clipboard handling is only fully supported on macOS and Windows.',
    folderTitle: 'Global or relative image folder',
    globalFolder: 'Global image folder',
    openFolder: 'Open...',
    showInFolder: 'Show in Folder',
    preferRelative: 'Prefer relative assets folder',
    relativeFolderName: 'Relative image folder name',
    filenameHint: 'Include `${filename}` in the text-box above to automatically insert the document file name.', // eslint-disable-line no-template-curly-in-string
    uploaderTitle: 'Uploader',
    currentUploader: 'The current image uploader is {name}.',
    noUploader: 'Currently no uploader is selected. Please select an uploader and config it.',
    picgoMissing1: 'Your system does not have ',
    picgoMissing2: ' installed, please install it before use.',
    githubDeprecation: 'Github will be removed in a future version, please use picgo',
    githubToken: 'GitHub token:',
    githubTokenNote: 'The token is saved by Keychain on macOS, Secret Service API/libsecret on Linux and Credential Vault on Windows',
    inputToken: 'Input token',
    ownerName: 'Owner name:',
    repoName: 'Repo name:',
    branchName: 'Branch name (optional):',
    scriptLocation: 'Shell script location:',
    scriptPath: 'Script absolute path',
    scriptDescription: 'The script will be executed with the image file path as its only argument and it should output any valid value for the src attribute of a HTMLImageElement.',
    saveConfigTitle: 'Save Config',
    saveGithubMsg: 'The Github configuration has been saved.',
    saveScriptMsg: 'The command line script configuration has been saved'
  },

  // Legal notices checkbox
  legalNotices: {
    agreePrefix: 'By using {name}, you agree to {name}\'s',
    privacyStatement: 'Privacy Statement',
    and: 'and',
    termsOfService: 'Terms of Service',
    gdprNotice: 'This service cannot be used in Europe due to GDPR issues.'
  },

  // Preferences - Key Bindings
  prefKeyBindings: {
    title: 'Key Bindings',
    description: 'Customize TouchFish Texts shortcuts and click on the save button below to apply all changes (requires a restart). All available and default key binding can be found',
    online: 'online',
    descriptionColumn: 'Description',
    keyCombination: 'Key Combination',
    optionsColumn: 'Options',
    edit: 'Edit',
    reset: 'Reset',
    unbind: 'Unbind',
    saveBtn: 'Save',
    restoreDefaults: 'Restore default key bindings',
    debugOptions: 'Debug options:',
    dumpInfo: 'Dump keyboard information',
    failedSave: 'Failed to save',
    errorSaveMsg: 'An unexpected error occurred while saving.',
    shortcutInUse: 'Shortcut already in use',
    shortcutInUseMsg: 'The shortcut "{accelerator}" is already in use. Please unset the shortcut and try again.'
  },

  // Key input dialog
  keyInput: {
    placeholder: 'Press a key combination',
    hint: 'Press Enter to continue or ESC to exit.',
    cannotBeBound: 'Current key combination cannot be bound!'
  },

  // Font text box
  fontTextBox: {
    placeholder: 'Select font...'
  },

  // Store - auto updates
  updates: {
    errorTitle: 'Update',
    notAvailableTitle: 'Update not Available',
    downloadedTitle: 'Update Downloaded',
    availableTitle: 'Update Available'
  },

  // Store - editor notifications
  editorNotifications: {
    errorLoadingTab: 'Error loading tab',
    errorLoadingTabMsg: 'There was an error while loading the file change because the tab cannot be found.',
    imageDeletionUrl: 'Image deletion URL',
    imageDeletionUrlMsg: 'Click to copy the deletion URL of the uploaded image to the clipboard ({url}).',
    saveFailure: 'Save failure',
    exportedSuccessfully: 'Exported successfully',
    exportedSuccessfullyMsg: 'Exported "{filename}" successfully!'
  },

  // Store - project notifications
  projectNotifications: {
    errorDeleting: 'Error while deleting',
    pasteForbidden: 'Paste Forbidden',
    pasteForbiddenMsg: 'Source and destination must not be the same.',
    errorPasting: 'Error while pasting',
    errorSideBar: 'Error in Side Bar'
  },

  // Context menu - sidebar
  contextMenuSideBar: {
    newFile: 'New File',
    newDirectory: 'New Directory',
    copy: 'Copy',
    cut: 'Cut',
    paste: 'Paste',
    rename: 'Rename',
    moveToTrash: 'Move To Trash',
    showInFolder: 'Show In Folder'
  },

  // Context menu - tabs
  contextMenuTabs: {
    close: 'Close',
    closeOthers: 'Close others',
    closeSaved: 'Close saved tabs',
    closeAll: 'Close all tabs',
    rename: 'Rename',
    copyPath: 'Copy path',
    showInFolder: 'Show in folder'
  },

  // Select options (general config)
  options: {
    titleBarCustom: 'Custom',
    titleBarNative: 'Native',
    fileCreated: 'Creation time',
    fileModified: 'Modification time',
    fileTitle: 'Title',
    langEn: 'English',
    langZhCN: '中文（简体）'
  },

  // Menu (main process)
  menu: {
    file: '&File',
    newTab: 'New Tab',
    newWindow: 'New Window',
    openFile: 'Open File...',
    openFolder: 'Open Folder...',
    openRecent: 'Open Recent',
    clearRecent: 'Clear Recently Used',
    save: 'Save',
    saveAs: 'Save As...',
    autoSave: 'Auto Save',
    moveTo: 'Move To...',
    rename: 'Rename...',
    import: 'Import...',
    export: 'Export',
    exportHtml: 'HTML',
    exportPdf: 'PDF',
    exportPrint: 'Print',
    preferences: 'Preferences...',
    closeTab: 'Close Tab',
    closeWindow: 'Close Window',
    quit: 'Quit',

    edit: '&Edit',
    undo: 'Undo',
    redo: 'Redo',
    cut: 'Cut',
    copy: 'Copy',
    paste: 'Paste',
    copyAsMarkdown: 'Copy as Markdown',
    copyAsHtml: 'Copy as HTML',
    pasteAsPlainText: 'Paste as Plain Text',
    selectAll: 'Select All',
    duplicate: 'Duplicate',
    createParagraph: 'Create Paragraph',
    deleteParagraph: 'Delete Paragraph',
    find: 'Find',
    findNext: 'Find Next',
    findPrevious: 'Find Previous',
    replace: 'Replace',
    findInFolder: 'Find in Folder',
    screenshot: 'Screenshot',
    lineEnding: 'Line Ending',
    crlf: 'Carriage return and line feed (CRLF)',
    lf: 'Line feed (LF)',

    view: '&View',
    commandPalette: 'Command Palette...',
    sourceCodeMode: 'Source Code Mode',
    typewriterMode: 'Typewriter Mode',
    focusMode: 'Focus Mode',
    showSidebar: 'Show Sidebar',
    showTabBar: 'Show Tab Bar',
    toggleToc: 'Toggle Table of Contents',
    reloadImages: 'Reload Images',
    devTools: 'Show Developer Tools',
    reloadWindow: 'Reload window',

    format: 'F&ormat',
    bold: 'Bold',
    italic: 'Italic',
    underline: 'Underline',
    superscript: 'Superscript',
    subscript: 'Subscript',
    highlight: 'Highlight',
    inlineCode: 'Inline Code',
    inlineMath: 'Inline Math',
    strikethrough: 'Strikethrough',
    hyperlink: 'Hyperlink',
    image: 'Image',
    clearFormatting: 'Clear Formatting',

    paragraph: '&Paragraph',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    promoteHeading: 'Promote Heading',
    demoteHeading: 'Demote Heading',
    table: 'Table',
    codeFences: 'Code Fences',
    quoteBlock: 'Quote Block',
    mathBlock: 'Math Block',
    htmlBlock: 'Html Block',
    orderedList: 'Ordered List',
    bulletList: 'Bullet List',
    taskList: 'Task List',
    looseListItem: 'Loose List Item',
    paragraphItem: 'Paragraph',
    horizontalRule: 'Horizontal Rule',
    frontMatter: 'Front Matter',

    theme: '&Theme',

    window: '&Window',
    minimize: 'Minimize',
    alwaysOnTop: 'Always on Top',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    fullScreen: 'Show in Full Screen',
    bringAllToFront: 'Bring All to Front',

    help: '&Help',
    quickStart: 'Quick Start...',
    markdownReference: 'Markdown Reference...',
    changelog: 'Changelog...',
    reportIssue: 'Report Issue or Request Feature...',
    website: 'Website...',
    watchGithub: 'Watch on GitHub...',
    followGithub: 'Follow us on Github...',
    license: 'License...',

    // macOS app menu
    about: 'About TouchFish Texts',
    aboutApp: 'About TouchFish Texts...',
    checkUpdates: 'Check for updates...',
    services: 'Services',
    hide: 'Hide TouchFish Texts',
    hideOthers: 'Hide Others',
    showAll: 'Show All',
    quitApp: 'Quit TouchFish Texts',
    dockOpen: 'Open...',
    dockClearRecent: 'Clear Recent'
  }
}
