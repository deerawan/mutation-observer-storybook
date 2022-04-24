import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  context: __dirname,
  devtool: 'source-map',
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  watchOptions: {
    ignored: ['node_modules', '.storybook', '.github'],
  },
};

export default config;

