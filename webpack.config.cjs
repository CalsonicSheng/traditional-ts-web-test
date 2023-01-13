// to use webpack:
// install both "webpack" and "webpack-cli" as dev dependencies (dev dependencies will not be used during production/distribution | only will be used during development)
// you then have to manually create "webpack.config.cjs" (use "cjs" if node project is configured to "type: module")
// to run webpack to bundle everything according to your configuration, have {"build": "webpack"} in your package.json "script" field,

const path = require('path');

module.exports = {
  // mode has either "development" or "production"
  mode: 'development',

  // you can specify multiple different TOP ROOT LEVEL js file
  entry: {
    homePageBundle: path.resolve(__dirname, 'client/src/homeJS/homeMain.js'),
    nextPageBundle: path.resolve(__dirname, 'client/src/nextJS/nextMain.js'),
  },

  // the number of bundled output will be auto match with same number of entry configured as above
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    // this will make the bundled js file name dynamic (same as the how you specified under "entry" field)
    filename: '[name].js',
    assetModuleFilename: '[name][ext]',
  },

  // the main job of "module" under webpack is to enable JS file to integrate with any other code file type (mostly are either styling or asset file)
  // under this setting, we can directly import CSS and any other asset type file under target JS file that get integrated/bundled althogether with js
  // thus, you dont need to "<link rel="stylesheet" href="/style.css" />" any more under target HTML as it is already integrated when bundled with js
  // style will be auto applied when you <script> corresponding bundled.js file in target html file.
  // Any asset dont need to be directly used in html, they can also be imported and used directly under js file
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // these two loaders need to npm install further
      { test: /\.(png|svg|jpg)$/i, type: 'asset/resource' }, // this is pre-packaged already
    ],
  },
};
