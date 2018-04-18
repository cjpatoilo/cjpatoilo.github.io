module.exports = {
  staticFileGlobs: [
    'dist/**/*.{html,css,js,json,webapp,txt,svg,png,jpg,jpeg,gif}'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  directoryIndex: '200.html',
  navigateFallback: '200.html',
  runtimeCaching: []
}
