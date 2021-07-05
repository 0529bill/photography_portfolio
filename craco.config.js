const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Assets': path.resolve(__dirname, 'src/assets/'),
    //   '@Reducers': path.resolve(__dirname, 'src/reducers/'),
    //   '@Lang': path.resolve(__dirname, 'src/lang/'),
    //   '@GoogleAnalytics': path.resolve(__dirname, 'src/GoogleAnalytics/'),
    },
  },
};
