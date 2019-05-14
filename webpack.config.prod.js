import path from 'path';  
import HtmlWebpackPlugin from 'html-webpack-plugin';  
import  MiniCssExtractPlugin from 'mini-css-extract-plugin'; 
export default { 
  devtool: 'source-map', 
  entry: {
    vendor: path.resolve(__dirname, './src/vendor.js'),
   
      
      main : [
      path.resolve(__dirname, './src/index.js')
      ]
 
  } ,
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  }, 
    plugins: [
      // Generate an external css file with a hash in the filename 
      new MiniCssExtractPlugin({filename: '[name].[chunkhash].css'}),
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
        inject: true ,        
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
        tokenJSToken: '69cba16e36d04240a54ba0d664a8c845'
      })
    ],
  module: {
    rules: [
      {  test: /\.jsx$/,  loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use:[ MiniCssExtractPlugin.loader, 'css-loader'] }    ]
  }
}
 