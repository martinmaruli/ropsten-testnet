require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/_cd9Bl4sg4ZMbhBhiv3iE6xJrBsYSeVZ',
      accounts: ['162f2ddb62afe185468423fd0be4966d69ca75847a394c74c09579b39d881d02'],
    },
  },
};