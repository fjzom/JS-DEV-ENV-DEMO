import path from 'path';

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
    plugins: [],
  module: {
    rules: [
      {  test: /\.jsx$/,  loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  }
}
 