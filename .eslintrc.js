module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "16.6.3"
    }
  },
  "rules": {
    "curly": [
      2,
      "all"
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          [
            "builtin"
          ],
          [
            "external"
          ],
          [
            "parent",
            "internal",
            "sibling",
            "index",
            "unknown"
          ]
        ]
      }
    ],
    "import/no-unresolved": "off",
    "import/extensions": [
      ".js",
      ".jsx",
      ".json",
      ".css",
      ".scss"
    ],
    "arrow-body-style": [
      "error",
      "always"
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "max-len": [
      "error",
      140
    ],
    "no-underscore-dangle": "off",
    "unicorn/filename-case": "off"
  }
}
