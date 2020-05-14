const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: "/Porfolio-Site/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
