const path = require("path");

module.exports = {
  mode: "development", // ou 'production' selon vos besoins
  entry: "./public/js/fedapayPayement.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
