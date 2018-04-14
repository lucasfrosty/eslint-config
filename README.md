## @lucasfrosty/eslint-config

My personal eslint-config file. It uses the airbnb style-guide with Prettier for auto formatting

### How to use it:

1.  Install the following packages into you project:

```bash
npm i @lucasfrosty/eslint-config babel-eslint eslint@4.9.0 eslint-config-airbnb@16.1.0 eslint-config-prettier@2.9.0 eslint plugin-import@2.7.0 eslint-plugin-jsx-a11y@6.0.2 eslint-plugin-prettier@2.6.0 eslint-plugin-react@7.4.0 --save-dev
```

2.  Next create a file with the name of `.eslintrc` on the root folder of the project.

3.  Inside the `.eslintrc` file just add the following:

```json
{
  "extends": "@lucasfrosty/eslint-config"
}
```

And that's it!! You'll be using both Prettier and ESLint using the Airbnb style-guide
