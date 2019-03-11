const GauchoCoin = artifacts.require("./Gauchocoin.sol");

module.exports = function (deployer, network, accounts) {
    const name = 'GauchoCoin';
    const symbol = 'Gaucho';
    const decimals = 18
    return deployer.deploy(GauchoCoin, name, symbol, decimals);
};



