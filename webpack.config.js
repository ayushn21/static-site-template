const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/_frontend/application.js",
  devtool: "source-map",
  // Set some or all of these to true if you want more verbose logging:
  stats: {
    modules: false,
    builtAt: false,
    timings: false,
    children: false,
  },
  output: {
    path: path.resolve(__dirname, "output", "_bridgetown", "static", "js"),
    filename: "all.[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(__dirname, 'src', '_frontend', 'javascript'),
      path.resolve(__dirname, 'src', '_frontend', 'styles'),
      path.resolve(__dirname, 'src', '_components'),
      path.resolve('./node_modules')
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/all.[contenthash].css",
    }),
    new ManifestPlugin({
      fileName: path.resolve(__dirname, ".bridgetown-webpack", "manifest.json"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose" : true }],
              [
                "@babel/plugin-transform-runtime",
                {
                  helpers: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ],
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: "file-loader",
        options: {
          name: "[name]-[contenthash].[ext]",
          outputPath: "../fonts",
          publicPath: "../fonts",
        },
      },
      {
        test: /\.png?$|\.jpg$/,
        loader: "file-loader",
        options: {
          name: "[name]-[contenthash].[ext]",
          outputPath: "../assets",
          publicPath: "../assets",
        },
      },
    ],
  },
};
