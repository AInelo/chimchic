const path = require("path");

module.exports = {
  mode: "development", // ou 'production' selon vos besoins
  entry: "./fedapayPayement.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
