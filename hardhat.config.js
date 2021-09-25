require("@nomiclabs/hardhat-waffle");
require('@eth-optimism/hardhat-ovm')
require("@nomiclabs/hardhat-etherscan");



// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    optimisticKovan: {
      url: 'https://kovan.optimism.io',
      ovm: true,
      accounts: { mnemonic: 'garment verify among glide lion badge cigar memory endorse debate audit fiscal' },
      gasPrice: 15000000      
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "3WXS1YSICP7XGYI3EBA5MTZSGJEQIYQ886"
  },

  solidity: {
    compilers: [
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },
  mocha: {
    timeout: 100000
  },
  ovm: {
    solcVersion: '0.7.6+commit.3b061308'
  }

};

