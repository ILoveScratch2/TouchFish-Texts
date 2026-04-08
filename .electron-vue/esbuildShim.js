// Polyfill for esbuild's __name helper used by mermaid v11+
// eslint-disable-next-line no-unused-vars
const __name = (target, value) => Object.defineProperty(target, 'name', { value, configurable: true })

module.exports = { __name }
