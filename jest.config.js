let { defaults } = require("jest-config");
module.exports = {
  setupFiles: ["<rootDir>/src/tests/setup.js"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|txt|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(our-react-components-.*?\\.js$))"
  ],
  transform: { "\\.js$": "<rootDir>/src/tests//fileTransformer.js" }
};
