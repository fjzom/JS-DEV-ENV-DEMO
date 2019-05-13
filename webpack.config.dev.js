import path from 'path';  
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default { 
  devtool: 'inline-source-map', 
  entry: {
    index: [
        "./src/index.js"
    ]
  } ,
  target: 'web',
  output: {
    path: path.resolve(__dirname, './src'),
    publicPath: '/',
    filename: 'bundle.js'
  }, 
    plugins: [
            // Create HTML file that includes reference to bundled JS.
            new HtmlWebpackPlugin({
              template: './src/index.html' ,
              inject: true 
            }),
    ],
  module: {
    rules: [
      {  test: /\.jsx$/,  loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  }
}
 