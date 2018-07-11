let { defaults } = require("jest-config");
module.exports = {
  setupFiles: ["<rootDir>/src/tests/setup.js"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/node_modules/jest-css-modules",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
