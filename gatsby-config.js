const path = require('path');

module.exports = {
  siteMetadata: {
    title: `casa-horizon-gatsby`,
    siteUrl: `https://www.casahorizon.com`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
          styles: path.resolve(__dirname, 'src/styles'),
          utils: path.resolve(__dirname, 'src/utils'),
          data: path.resolve(__dirname, 'src/data'),
          constants: path.resolve(__dirname, 'src/constants'),
          // '@vars': path.resolve(__dirname, 'src/styles/vars.scss'),
          // '@colors': path.resolve(__dirname, 'src/styles/colors.scss'),
          // '@fonts': path.resolve(__dirname, 'src/styles/fonts.scss'),
          // '@hooks': path.resolve(__dirname, 'src/hooks/index.js'),
          // '@mixins': path.resolve(__dirname, 'src/styles/mixins.scss'),
          // '@images': path.resolve(__dirname, 'src/images/'),
        },
        extensions: ['jsx', 'scss'],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingId: ['G-PTM394MSR8'],
    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
