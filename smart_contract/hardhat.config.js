require("dotenv").config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.PROVIDER_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};