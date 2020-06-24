const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    jsx: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.html$/,
        loader: ["html-loader"]
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/*.ts",
          to: "lib/"
        }
      ]
    })
  ]
};
