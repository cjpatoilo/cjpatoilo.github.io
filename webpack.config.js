const convPaths = require('convert-tsconfig-paths-to-webpack-aliases').default
const tsconfig = require('./tsconfig.json')
const alias = convPaths(tsconfig)

module.exports = {
  resolve: {
    alias
  }
}
