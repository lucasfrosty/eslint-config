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
      1,
      {
        "allowArrowFunctions": true,
      }
    ],
    "babel/object-curly-spacing": ["error", "always"]
  }
}
