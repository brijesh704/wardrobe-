const { whenProd } = require("@craco/craco");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Force Webpack to use version 4.x.x or another compatible version
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        fs: false,
      };

      return webpackConfig;
    },
  },
};
