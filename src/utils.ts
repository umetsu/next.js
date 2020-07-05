import marked from 'marked'
import highlightjs from 'highlight.js'
import sanitize from 'sanitize-html'

marked.setOptions({
  highlight: (code, lang) => highlightjs.highlightAuto(code, [lang]).value,
  sanitizer: sanitize,
  pedantic: false,
  gfm: true,
  breaks: true,
  silent: false,
})

export function parseMarkdown(markdown: string): string {
  return marked(markdown)
}
