import routeConfig from './route.config';

export default {
  routes: routeConfig,
  targets: {
    ie: 11,
  },
  // devtool: 'cheap-module-source-map',
  devtool: 'source-map',
  outputPath: './build',
  plugins: [
    'umi-plugin-polyfill',
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './components/Loading.tsx',
        },
        title: '',
        library: 'react',
        pwa: false,
        fastClick: true,
      },
    ],
  ],
  minimizer: 'terserjs',
  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions', 'not ie <= 10'],
  },
  // theme: themeTemplate,
  treeShaking: true,
  disableCSSSourceMap: true,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  define: {
    'process.env.PROD': JSON.stringify(true),
  },
  chainWebpack(config) {
    config.output
      .filename('[name].[chunkhash].bundle.js')
      .chunkFilename('[name].[chunkhash].bundle.js')
      .hashFunction('sha256')
      .hashDigest('hex')
      .hashDigestLength(20);
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 20000,
      minChunks: 4,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        icons: {
          name: 'icons',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@ant-design)[\\/]/,
        },
        commons: {
          name: 'commons',
          chunks: 'async',
          minChunks: 2,
          minSize: 0,
        },
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|umi|(\@babel)|core-js|moment)[\\/]/,
          priority: -10,
        },
      },
    });
  },
};
