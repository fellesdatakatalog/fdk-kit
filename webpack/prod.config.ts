import type { Configuration } from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './base.config';

const configuration: Configuration = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map'
});

export default configuration;
