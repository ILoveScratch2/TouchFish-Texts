import marked from 'muya/lib/parser/marked'

/**
 * Mixin for preference components: renders description/notes strings
 * as inline HTML using the project's own markdown parser.
 */
export default {
  methods: {
    md (text) {
      if (!text) return ''
      const html = marked(text, { silent: true })
      // Strip the wrapping <p>...</p>\n from a single-paragraph result.
      return html.replace(/^<p>([\s\S]*?)<\/p>\n?$/, '$1')
    }
  }
}
