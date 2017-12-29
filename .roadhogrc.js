export default {
  "entry": ["babel-polyfill", "src/index.js"],
  "publicPath": "/self-services/dist/",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", {"libraryName": "antd", "style": "css"}],
        "transform-react-jsx"
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", {"libraryName": "antd", "style": "css"}],
        "transform-react-jsx"
      ]
    }
  },
  "proxy": {
    "/api": {
      "target": "http://0.0.0.0:8088/",
      "changeOrigin": true,
      "pathRewrite": {"^/api": ""},
      "secure": false
    },
  }
}

