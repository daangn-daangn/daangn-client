const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async config => ({
    ...config,
    resolve: {
      ...config.resolve,
      ...config.resolve.plugins.push(new TsconfigPathsPlugin({})),
      alias: {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
      },
    },
  }),
}