const path = require('path');

module.exports = {
  stories: ['../packages/**/stories/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  webpackFinal: async config => {
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
    assetRule.exclude = [path.resolve(__dirname, '../packages')];
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true
          }
        }
      ],
      include: [path.resolve(__dirname, '../packages')]
    });
    return config;
  },
  core: {
    builder: 'webpack5'
  }
};
