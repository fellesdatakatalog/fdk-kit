import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import type { StorybookConfig } from '@storybook/core/types';

const storybookConfig: StorybookConfig = {
  stories: ['../packages/**/stories/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async config => {
    const outputPath = config.output.path;
    const storybookStaticPath = 'storybook-static';

    const assetRule = config.module.rules.find(({ test }) =>
      (test as any).test('.svg')
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

    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(
              __dirname,
              '../node_modules/iframe-resizer/js/iframeResizer.contentWindow.min.js'
            ),
            to: resolve(
              outputPath,
              outputPath.includes(storybookStaticPath)
                ? ''
                : storybookStaticPath
            )
          }
        ]
      })
    );

    return config;
  }
};

export default storybookConfig;
