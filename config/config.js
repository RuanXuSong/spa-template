import routeConfig from './route.config';

export default {
  routes: routeConfig,
  targets: {
    chrome: 49,
    firefox: 45,
    safari: 10,
    edge: 13,
    ios: 10,
    ie: 10,
  },
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
        title: '', // 项目自行补充
        library: 'react',
        dll: false,
        pwa: false,
        hardSource: false,
        fastClick: true,
      },
    ],
  ],
  minimizer: 'terserjs',
  treeShaking: true,
  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions', 'not ie <= 10'],
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  define: {
    'process.env.PROD': JSON.stringify(false),
  },
};
