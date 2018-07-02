let { defaults } = require("jest-config");
module.exports = {
  setupFiles: ["<rootDir>/src/tests/setup.js"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  verbose: true
};
