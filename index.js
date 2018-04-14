module.exports = {
  "extends": [
    "airbnb", "plugin:prettier/recommended"
  ],

  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": 0,
    "camelcase": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "to",
          "hrefLeft",
          "hrefRight"
        ],
        "aspects": [
          "noHref",
          "invalidHref",
          "preferButton"
        ]
      }
    ]
  }
}