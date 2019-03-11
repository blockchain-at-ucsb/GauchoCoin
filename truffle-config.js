require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = process.env.ROPSTEN_MNEMONIC_2;
const accessToken = process.env.INFURA_ACCESS_TOKEN;

module.exports = {
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    networks: {
        private: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
            from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + accessToken)
            },
            network_id: 3
        }
    }
};
