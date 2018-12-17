const {injectBabelPlugin} = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

// root-import from '~'
const rootImport = ['root-import', {
  rootPathSuffix: 'src',
}]

module.exports = function override(config, env) {
  // root-import from '~'
  config = injectBabelPlugin(rootImport, config)
  config = injectBabelPlugin(
    ['import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }], // change importing css to less
    config,
  )
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#f44336',
      '@layout-body-background': '#FFF',
      '@layout-header-background': '@primary-7',
      // ref https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    },
    javascriptEnabled: true,
  })(config, env)
  return config
}
