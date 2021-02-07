// eslint-disable-next-line
const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/style/index.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('copy')
      .tap((args) => {
        args[0].push({
          from: path.resolve(__dirname, 'static/'),
          to: path.resolve(__dirname, 'dist/'),
          toType: 'dir',
          ignore: ['.DS_Store'],
        });
        return args;
      });
  },
};