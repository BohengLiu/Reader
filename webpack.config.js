module.exports = {
  entry:"./src/index",
  output:{
      filename:"bundle.js",
      path: __dirname + '/dist'
  },
   // 调试时开启sourcemaps    
   devtool:"source-map",

   resolve: {
       extensions: [".jsx",".js",".json"]
   },

   module:{
       rules: [
          {
              test: /\.jsx?$/,
              loaders: 'babel-loader'
            },
           {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            },
            {
              test: /\.json$/,
              loaders: ['json-loader']
            }
       ]
   },

  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};