const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "wordrelay", // 웹팩설정 이름
  mode: "development", // 실서비스: production
  devtool: "eval", // 실서비스: hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // entry 읽고 modules 적용한 후 output 뺀다
  entry: {
    app: ["./client"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?$/, // 이 파일에 규칙을 적용하겠다.
        loader: "babel-loader", // 이 규칙을 적용하겠다.
        options: {
          // 바벨 옵션 설정
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], // browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({ debug: true }),
    new RefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" }, // webpack 실행후 저장할 폴더
    static: { directory: path.resolve(__dirname) }, //indexhtml가 위치하는 파일 위치
    hot: true,
  },
};
