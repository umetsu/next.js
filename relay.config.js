module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './src',
  schema: './schema.graphql',
  language: 'typescript',
  artifactDirectory: './src/graphql/__generated__',
  exclude: ['**/node_modules/**', '**/test/**', '**/__generated__/**'],
}
