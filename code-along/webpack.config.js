const HTMLWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                "@babel/plugin-transform-react-jsx",
                "@babel/plugin-proposal-class-properties",
              ],
            },
          },
        ],
      },
      {
        test: /\.css?$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            },
          }
        ]
      },
    ],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: path.resolve(__dirname, "dist/index.html"),
      filename: "index.html",
    }),
  ],
};
