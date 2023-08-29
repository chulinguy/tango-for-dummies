const {
  addWebpackModuleRule,
  removeModuleScopePlugin,
  override
} = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.jsx$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react']
      }
    }
  }),
  removeModuleScopePlugin(),
)