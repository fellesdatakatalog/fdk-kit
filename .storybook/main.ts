import type { RuleSetRule } from 'webpack';
import { resolve } from 'path';
import type { StorybookConfig } from '@storybook/core/types';

const storybookConfig: StorybookConfig = {
  stories: ['../packages/**/stories/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async config => {
    const assetRule = (config.module.rules as RuleSetRule[]).find(({ test }) =>
      (test as RegExp).test('.svg')
    );
    assetRule.exclude = [resolve(__dirname, '../packages')];

    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            configFile: resolve(__dirname, '../babel.config.js')
          }
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true
          }
        }
      ],
      include: [resolve(__dirname, '../packages')]
    });

    return config;
  }
};

export default storybookConfig;
