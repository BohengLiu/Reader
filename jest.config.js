'use strict';

module.exports = {
  "moduleNameMapper":{
    "\\.(css|less)$": "identity-obj-proxy"
  },
    "transform": {
        "^.+\\.jsx?$": "babel-jest"
      },
      "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      "moduleFileExtensions": [
        "js",
        "jsx",
        "json",
        "node"
      ]
};