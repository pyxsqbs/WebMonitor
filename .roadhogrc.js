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
            "target": "http://0.0.0.0:8082/",
            "changeOrigin": true,
            "pathRewrite": {"^/api": ""},
            "secure": false
        },
        "/CommoditySearch": {
            "target": "http://10.171.100.100:5090/",
            "changeOrigin": true,
            "pathRewrite": {"^/CommoditySearch": ""},
            "secure": false
        },
    }
}

