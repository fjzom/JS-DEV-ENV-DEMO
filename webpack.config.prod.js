import path from 'path';  
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default { 
  devtool: 'source-map', 
  entry: {
    index: [
        "./src/index.js"
    ]
  } ,
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }, 
    plugins: [
      // Create HTML file that includes reference to bundled JS.
      new HtmlWebpackPlugin({
        template: './src/index.html' ,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        inject: true 
      })
    ],
  module: {
    rules: [
      {  test: /\.jsx$/,  loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  }
}
 