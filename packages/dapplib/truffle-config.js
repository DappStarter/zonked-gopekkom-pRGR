require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift recipe saddle arrow hidden fork swap gift'; 
let testAccounts = [
"0xcea4442c95c7d599d337286b1e8715165166efe16b9cd12b8f3d377b50b9568a",
"0x7dd396b4198a471df936c9e87b0a3aed6aaf4144cf69c1ba051bda4e6437c04b",
"0xce277bcfc489e016b833305f4d07010a1732cf0e1f0fe344c9022d57ec94a1dd",
"0xfaf1748093685ffdc1949bbc350698964bd8b6b0d8b60d5c07e85ffe2b22e548",
"0xad07933d9d563d2ede49338265fc31aab0c9c6e3715b8dd8e1c23ee24ca57b7a",
"0x582d05f5ebf74ba36803464d22c34fef018f7a8edd2830a0375307fe81ceac03",
"0xbb424296b48d766ccb925a0897b208cd9ae0cdedcdfc54257ce0750eedf5e34a",
"0xa47f9173c3462f7f6fa24e6e3a3420bd57ffbd02418498b21ba2e98b3f147ca4",
"0xc19fb4ab04e91ddb68e87e2646a814e07ac86af4ddc2b220e9bf47f4b430489f",
"0x028a8c1c722e90a0543ed552a817beb3800314fd3475215f0879a6a626d025de"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

