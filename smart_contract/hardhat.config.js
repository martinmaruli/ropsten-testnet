require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/DFAgbXyc3abpV8s3Jd2cLYTPcj13upPF',
      accounts: ['04ca9f29c99b65ff0321074d0fe72406d994a332bbe52887957e1d1b918b7809'],
    },
  },
};