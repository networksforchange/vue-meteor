Package.describe({
  name: 'networksforchange:vue-sass',
  version: '0.1.2',
  summary: 'Add sass and scss support for vue components',
  git: 'https://github.com/networksforchange/meteor-vue-component',
  documentation: 'README.md',
})

Package.registerBuildPlugin({
  name: 'vue-component-sass',
  use: [
    'ecmascript@0.12.7',
  ],
  sources: [
    'vue-sass.js',
  ],
  npmDependencies: {
    'node-sass': '4.14.1',
    'meteor-project-path': '0.0.3',
  },
})

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0')
})
