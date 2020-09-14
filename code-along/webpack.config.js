module.exports = {
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
        use: ["style-loader", "css-loader"]
      },
    ],
  },
};
