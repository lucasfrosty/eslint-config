module.exports = {
  "extends": [
    "plugin:shopify/esnext",
    "plugin:shopify/react",
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/jsx-no-bind": [
      true,
      {
        "allowArrowFunctions": true,
      }
    ],
    "object-curly-spacing": ["error", "always"]
  }
}