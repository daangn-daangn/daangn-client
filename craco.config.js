const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './src',
        aliases: {
          '@atoms': 'components/UI/atoms',
          '@molecules': 'components/UI/molecules',
          '@organisms': 'components/UI/organisms',
        },
      },
    },
  ],
};
