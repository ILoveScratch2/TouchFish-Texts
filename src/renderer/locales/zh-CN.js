export default {
  // App
  app: {
    title: 'TouchFish Texts',
    description: '你想要的 Markdown 编辑器。',
    copyright: 'Copyright © 2026-{year} ILoveScratch2',
    save: '保存'
  },

  // About dialog
  about: {
    github: 'GitHub'
  },

  // Title bar
  titleBar: {
    words: '字数',
    characters: '字符数',
    paragraphs: '段落数',
    wordShort: '字',
    characterShort: '符',
    paragraphShort: '段',
    allShort: '全',
    wordFull: '字',
    characterFull: '字符',
    paragraphFull: '段落',
    allFull: '（含空格）字符'
  },

  // Command palette
  commandPalette: {
    placeholder: '输入命令以执行'
  },

  // Search bar (editor inline search)
  search: {
    searchPlaceholder: '搜索',
    replacePlaceholder: '替换',
    caseSensitive: '区分大小写',
    wholeWord: '全词匹配',
    useRegex: '使用正则表达式',
    replaceAll: '全部替换',
    replaceSingle: '替换单个'
  },

  // Recent / Import page
  recent: {
    newFile: '新建文件',
    importTitle: '导入或打开',
    dropHere: '拖放文件到此处以导入到 TouchFish Texts'
  },

  // Export settings dialog
  exportSettings: {
    title: '导出选项',
    infoText: '请自定义页面外观，然后点击"导出"继续。',
    tabInfo: '信息',
    tabPage: '页面',
    tabStyle: '样式',
    tabTheme: '主题',
    tabHeaderFooter: '页眉和页脚',
    tabToc: '目录',
    pageTitle: '页面标题：',
    pageSize: '页面大小：',
    widthHeightMm: '宽度/高度（毫米）：',
    landscapeOrientation: '横向打印：',
    pageMarginMm: '页面边距（毫米）：',
    topBottom: '上/下：',
    leftRight: '左/右：',
    overwriteFont: '覆盖主题字体设置：',
    fontFamily: '字体系列：',
    fontSize: '字体大小',
    lineHeight: '行高',
    autoNumberHeadings: '自动编号标题：',
    showFrontMatter: '显示前置内容：',
    themeText: '您可以通过选择主题或创建自定义主题来更改文档外观。',
    theme: '主题：',
    headerFooterText: '如果定义了页眉和/或页脚，文本将出现在所有页面上。',
    headerType: '页眉类型：',
    leftHeaderText: '左侧页眉文本：',
    mainHeaderText: '主页眉文本：',
    rightHeaderText: '右侧页眉文本：',
    footerType: '页脚类型：',
    leftFooterText: '左侧页脚文本：',
    mainFooterText: '主页脚文本：',
    rightFooterText: '右侧页脚文本：',
    customizeStyle: '自定义样式：',
    allowStyledHeaderFooter: '允许带样式的页眉和页脚：',
    headerFooterFontSize: '页眉和页脚字体大小',
    includeTopHeading: '包含顶级标题：',
    includeTopHeadingDetail: '同时包含第一级标题。',
    tocTitle: '标题：',
    exportButton: '导出...'
  },

  // Sidebar - tree
  sideBar: {
    openedFiles: '已打开文件',
    saveAll: '全部保存',
    closeAll: '全部关闭',
    emptyProject: '空项目',
    createFile: '创建文件',
    openFolder: '打开文件夹',
    tableOfContents: '目录'
  },

  // Sidebar - folder search
  sideBarSearch: {
    placeholder: '在文件夹中搜索...',
    caseSensitive: '区分大小写',
    wholeWord: '全词匹配',
    useRegex: '使用正则表达式',
    noFolderOpen: '未打开文件夹',
    noResultsFound: '未找到结果。',
    cancel: '取消',
    showMoreMatches: '显示更多匹配',
    openFolder: '打开文件夹',
    match: '处匹配',
    matches: '处匹配',
    in: '共',
    file: '个文件',
    files: '个文件'
  },

  // Editor notifications
  editor: {
    ok: '确定'
  },

  // Preferences sidebar
  prefSidebar: {
    title: '偏好设置',
    searchPlaceholder: '搜索偏好设置',
    general: '通用',
    editor: '编辑器',
    markdown: 'Markdown',
    spelling: '拼写检查',
    theme: '主题',
    image: '图片',
    keybindings: '键盘快捷键'
  },

  // Preferences - General
  prefGeneral: {
    title: '通用',
    autoSaveTitle: '自动保存：',
    autoSave: '自动保存文档更改',
    autoSaveDelay: '文档编辑后自动保存的延迟时间',
    windowTitle: '窗口：',
    titleBarStyle: '标题栏样式',
    requiresRestart: '需要重启。',
    hideScrollbar: '隐藏滚动条',
    openFilesNewWindow: '在新窗口中打开文件',
    openFolderNewWindow: '在新窗口中打开文件夹',
    zoom: '缩放',
    sidebarTitle: '侧边栏：',
    wordWrapToc: '在目录中换行',
    fileSortBy: '文件夹中文件的排序方式',
    startupTitle: '启动时的操作：',
    openDefaultDir: '打开默认目录',
    openBlankPage: '打开空白页',
    selectFolder: '选择文件夹',
    miscTitle: '其他：',
    language: '界面语言'
  },

  // Preferences - Editor
  prefEditor: {
    title: '编辑器',
    textEditorTitle: '文本编辑器设置：',
    fontSize: '字体大小',
    lineHeight: '行高',
    fontFamily: '字体系列',
    editorLineWidth: '文本编辑器最大宽度',
    editorLineWidthNotes: "留空以使用主题默认值，否则请使用带单位后缀的数字，单位可以是 'ch'（字符宽度）、'px'（像素）或 '%'（百分比）。",
    codeBlockTitle: '代码块设置：',
    writingBehaviorTitle: '书写行为：',
    trimCodeBlockEmptyLines: '移除首尾空行',
    autoPairBracket: '书写时自动闭合括号',
    autoPairMarkdownSyntax: '自动补全 Markdown 语法',
    autoPairQuote: '自动闭合引号',
    tabSize: '首选 Tab 宽度',
    fileRepresentationTitle: '文件格式：',
    endOfLine: '换行符类型',
    defaultEncoding: '默认编码',
    autoGuessEncoding: '自动检测文件编码',
    trimTrailingNewline: '尾部换行符处理方式',
    miscTitle: '其他：',
    textDirection: '文字方向',
    hideQuickInsertHint: '隐藏新段落类型选择提示',
    hideLinkPopup: '鼠标悬停在链接上时隐藏弹窗',
    autoCheck: '是否自动勾选相关任务'
  },

  // Preferences - Markdown
  prefMarkdown: {
    title: 'Markdown',
    listsTitle: '列表：',
    preferLooseListItem: '首选宽松列表项',
    bulletListMarker: '无序列表首选标记符',
    orderListDelimiter: '有序列表首选标记符',
    listIndentation: '首选列表缩进',
    extensionsTitle: 'Markdown 扩展：',
    frontmatterType: '前置内容格式',
    superSubScript: '启用 Pandoc 风格的上下标',
    footnote: '启用 Pandoc 风格的脚注',
    footnoteNotes: '需要重启。',
    compatibilityTitle: '兼容性：',
    isHtmlEnabled: '启用 HTML 渲染',
    isGitlabCompatibilityEnabled: '启用 GitLab 兼容模式',
    diagramsTitle: '图表：',
    sequenceTheme: '时序图主题',
    miscTitle: '其他：',
    preferHeadingStyle: '首选标题样式'
  },

  // Preferences - Theme
  prefTheme: {
    title: '主题',
    autoSwitch: '根据系统设置自动调整应用主题',
    openThemeFolder: '打开主题文件夹',
    openFolder: '打开文件夹',
    importTheme: '导入自定义主题',
    importThemeButton: '导入主题'
  },

  // Preferences - Spellchecker
  prefSpelling: {
    title: '拼写检查',
    enabled: '启用拼写检查',
    noUnderline: '隐藏拼写错误标记',
    autoDetect: '自动检测文档语言',
    language: '拼写检查默认语言',
    macOsNote: '输入时将自动检测使用的语言。可以通过系统偏好设置中的"语言与地区"添加更多语言。',
    customDictTitle: '自定义词典：',
    editCustomDict: '编辑自定义词典中的词语。',
    noWords: '暂无词语',
    wordColumn: '词语',
    optionsColumn: '操作',
    deleteWord: '删除',
    errorSwitchLanguage: '切换语言失败',
    errorRemoveWord: '删除自定义词语失败',
    errorSave: '保存时发生意外错误。'
  },

  // Preferences - Image
  prefImage: {
    title: '图片',
    defaultAction: '从本地文件夹或剪贴板插入图片后的默认操作',
    clipboardNote: '剪贴板处理仅在 macOS 和 Windows 上完全支持。',
    folderTitle: '全局或相对图片文件夹',
    globalFolder: '全局图片文件夹',
    openFolder: '打开...',
    showInFolder: '在文件夹中显示',
    preferRelative: '首选相对资源文件夹',
    relativeFolderName: '相对图片文件夹名称',
    filenameHint: '在上方文本框中填写 `${filename}` 可自动插入文档文件名。', // eslint-disable-line no-template-curly-in-string
    uploaderTitle: '上传器',
    currentUploader: '当前图片上传器为 {name}。',
    noUploader: '当前未选择上传器，请选择并配置一个上传器。',
    picgoMissing1: '您的系统未安装 ',
    picgoMissing2: '，请先安装后再使用。',
    githubDeprecation: 'GitHub 上传器将在未来版本中移除，请改用 picgo',
    githubToken: 'GitHub Token：',
    githubTokenNote: 'Token 在 macOS 上保存在 Keychain，在 Linux 上使用 Secret Service API/libsecret，在 Windows 上使用凭据保管库',
    inputToken: '输入 Token',
    ownerName: '所有者名称：',
    repoName: '仓库名称：',
    branchName: '分支名称（可选）：',
    scriptLocation: 'Shell 脚本位置：',
    scriptPath: '脚本绝对路径',
    scriptDescription: '脚本将以图片文件路径作为唯一参数执行，并应输出 HTMLImageElement 的 src 属性的有效值。',
    saveConfigTitle: '保存配置',
    saveGithubMsg: 'GitHub 配置已保存。',
    saveScriptMsg: '命令行脚本配置已保存'
  },

  // Legal notices checkbox
  legalNotices: {
    agreePrefix: '使用 {name} 即表示您同意 {name} 的',
    privacyStatement: '隐私声明',
    and: '和',
    termsOfService: '服务条款',
    gdprNotice: '由于 GDPR 问题，该服务不能在欧洲使用。'
  },

  // Preferences - Key Bindings
  prefKeyBindings: {
    title: '键盘快捷键',
    description: '自定义 TouchFish Texts 快捷键，点击下方保存按钮以应用所有更改（需要重启）。所有可用的默认快捷键可在',
    online: '在线查看',
    descriptionColumn: '描述',
    keyCombination: '快捷键组合',
    optionsColumn: '操作',
    edit: '编辑',
    reset: '重置',
    unbind: '解除绑定',
    saveBtn: '保存',
    restoreDefaults: '恢复默认快捷键',
    debugOptions: '调试选项：',
    dumpInfo: '导出键盘信息',
    failedSave: '保存失败',
    errorSaveMsg: '保存时发生意外错误。',
    shortcutInUse: '快捷键已被使用',
    shortcutInUseMsg: '快捷键"{accelerator}"已被使用，请先取消该快捷键的绑定，然后重试。'
  },

  // Key input dialog
  keyInput: {
    placeholder: '按下快捷键组合',
    hint: '按 Enter 确认，按 ESC 退出。',
    cannotBeBound: '当前快捷键组合无法绑定！'
  },

  // Font text box
  fontTextBox: {
    placeholder: '选择字体...'
  },

  // Store - auto updates
  updates: {
    errorTitle: '更新',
    notAvailableTitle: '无可用更新',
    downloadedTitle: '更新已下载',
    availableTitle: '发现新更新'
  },

  // Store - editor notifications
  editorNotifications: {
    errorLoadingTab: '加载标签页出错',
    errorLoadingTabMsg: '由于找不到对应标签页，加载文件更改时出错。',
    imageDeletionUrl: '图片删除链接',
    imageDeletionUrlMsg: '单击以将已上传图片的删除链接复制到剪贴板（{url}）。',
    saveFailure: '保存失败',
    exportedSuccessfully: '导出成功',
    exportedSuccessfullyMsg: '"{filename}" 已成功导出！'
  },

  // Store - project notifications
  projectNotifications: {
    errorDeleting: '删除时出错',
    pasteForbidden: '粘贴被禁止',
    pasteForbiddenMsg: '源路径和目标路径不能相同。',
    errorPasting: '粘贴时出错',
    errorSideBar: '侧边栏出错'
  },

  // Context menu - sidebar
  contextMenuSideBar: {
    newFile: '新建文件',
    newDirectory: '新建目录',
    copy: '复制',
    cut: '剪切',
    paste: '粘贴',
    rename: '重命名',
    moveToTrash: '移至回收站',
    showInFolder: '在文件夹中显示'
  },

  // Context menu - tabs
  contextMenuTabs: {
    close: '关闭',
    closeOthers: '关闭其他',
    closeSaved: '关闭已保存标签页',
    closeAll: '关闭所有标签页',
    rename: '重命名',
    copyPath: '复制路径',
    showInFolder: '在文件夹中显示'
  },

  // Select options (general config)
  options: {
    titleBarCustom: '自定义',
    titleBarNative: '原生',
    fileCreated: '创建时间',
    fileModified: '修改时间',
    fileTitle: '标题',
    langEn: 'English',
    langZhCN: '中文（简体）'
  },

  // Menu (main process)
  menu: {
    file: '文件(&F)',
    newTab: '新建标签页',
    newWindow: '新建窗口',
    openFile: '打开文件...',
    openFolder: '打开文件夹...',
    openRecent: '最近打开',
    clearRecent: '清除最近使用记录',
    save: '保存',
    saveAs: '另存为...',
    autoSave: '自动保存',
    moveTo: '移动到...',
    rename: '重命名...',
    import: '导入...',
    export: '导出',
    exportHtml: 'HTML',
    exportPdf: 'PDF',
    exportPrint: '打印',
    preferences: '偏好设置...',
    closeTab: '关闭标签页',
    closeWindow: '关闭窗口',
    quit: '退出',

    edit: '编辑(&E)',
    undo: '撤销',
    redo: '重做',
    cut: '剪切',
    copy: '复制',
    paste: '粘贴',
    copyAsMarkdown: '复制为 Markdown',
    copyAsHtml: '复制为 HTML',
    pasteAsPlainText: '粘贴为纯文本',
    selectAll: '全选',
    duplicate: '复制段落',
    createParagraph: '创建段落',
    deleteParagraph: '删除段落',
    find: '查找',
    findNext: '查找下一个',
    findPrevious: '查找上一个',
    replace: '替换',
    findInFolder: '在文件夹中查找',
    screenshot: '截图',
    lineEnding: '换行符',
    crlf: '回车换行 (CRLF)',
    lf: '换行 (LF)',

    view: '视图(&V)',
    commandPalette: '命令面板...',
    sourceCodeMode: '源代码模式',
    typewriterMode: '打字机模式',
    focusMode: '专注模式',
    showSidebar: '显示侧边栏',
    showTabBar: '显示标签栏',
    toggleToc: '切换目录',
    reloadImages: '重新加载图片',
    devTools: '显示开发者工具',
    reloadWindow: '重新加载窗口',

    format: '格式(&O)',
    bold: '加粗',
    italic: '斜体',
    underline: '下划线',
    superscript: '上标',
    subscript: '下标',
    highlight: '高亮',
    inlineCode: '行内代码',
    inlineMath: '行内数学',
    strikethrough: '删除线',
    hyperlink: '超链接',
    image: '图片',
    clearFormatting: '清除格式',

    paragraph: '段落(&P)',
    heading1: '标题 1',
    heading2: '标题 2',
    heading3: '标题 3',
    heading4: '标题 4',
    heading5: '标题 5',
    heading6: '标题 6',
    promoteHeading: '提升标题级别',
    demoteHeading: '降低标题级别',
    table: '表格',
    codeFences: '代码围栏',
    quoteBlock: '引用块',
    mathBlock: '数学块',
    htmlBlock: 'HTML 块',
    orderedList: '有序列表',
    bulletList: '无序列表',
    taskList: '任务列表',
    looseListItem: '宽松列表项',
    paragraphItem: '段落',
    horizontalRule: '水平分割线',
    frontMatter: 'Front Matter',

    theme: '主题(&T)',

    window: '窗口(&W)',
    minimize: '最小化',
    alwaysOnTop: '总在最前',
    zoomIn: '放大',
    zoomOut: '缩小',
    fullScreen: '全屏显示',
    bringAllToFront: '所有窗口置前',

    help: '帮助(&H)',
    quickStart: '快速开始...',
    markdownReference: 'Markdown 参考...',
    changelog: '更新日志...',
    reportIssue: '报告问题或请求功能...',
    website: '官网...',
    watchGithub: '在 GitHub 上关注...',
    followGithub: '在 Github 上关注我们...',
    license: '许可证...',

    // macOS app menu
    about: '关于 TouchFish Texts',
    aboutApp: '关于 TouchFish Texts...',
    checkUpdates: '检查更新...',
    services: '服务',
    hide: '隐藏 TouchFish Texts',
    hideOthers: '隐藏其他',
    showAll: '显示全部',
    quitApp: '退出 TouchFish Texts',
    dockOpen: '打开...',
    dockClearRecent: '清除最近记录'
  }
}
