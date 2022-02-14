import type { Configuration } from 'webpack';
import { resolve } from 'path';
import nodeExternals from 'webpack-node-externals';

const configuration: Configuration = {
  entry: ['./src/index.ts'],
  output: {
    globalObject: 'this',
    path: resolve('./lib'),
    filename: 'index.js',
    clean: true,
    library: {
      type: 'umd'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        include: ['dependencies', 'peerDependencies']
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: resolve(__dirname, '../babel.config.js')
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve('./tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      },
      {
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
        ]
      }
    ]
  },
  plugins: []
};

export default configuration;
