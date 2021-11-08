require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-abi-exporter');


const { alchemyAPIkeyRinkeby } = require('./secrets.json');
const { deployerWalletPrivateKey } = require('./secrets.json');
const { bscscanAPIkey, polygonscanAPIkey } = require('./secrets.json');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  defaultNetwork: "bsctestnet",
  hardhat: {
    forking: {
      url: alchemyAPIkeyRinkeby
    }
  },
  networks: {
    TESTNETrinkeby: {
      url: alchemyAPIkeyRinkeby,
      accounts: [deployerWalletPrivateKey],
      gas: 10000000
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      chainId: 97,
      accounts: [deployerWalletPrivateKey],
      
    },
    bscmainnet: {
      url: `https://bsc-dataseed1.binance.org/`,
      accounts: [deployerWalletPrivateKey],
    },
    polygonmainnet: {
      url: `https://rpc-mainnet.maticvigil.com/`,
      accounts: [deployerWalletPrivateKey],
    },
    polygontestnet: {
      url: `https://rpc-mumbai.maticvigil.com/`,
      accounts: [deployerWalletPrivateKey],
    },
  },
  etherscan: {
    apiKey: bscscanAPIkey  
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  chai: {
    enableTimeouts: false,
    timeout: 200000,
    before_timeout: 120000 // Here is 2min but can be whatever timeout is suitable for you.
  },
  mocha: {
    enableTimeouts: false,
    timeout: 200000,
    before_timeout: 120000 // Here is 2min but can be whatever timeout is suitable for you.
  }
};