require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain purity gesture bean blue swim'; 
let testAccounts = [
"0x5c2640587dc0dbff3600c3315984d576828046393187150e19c8a16b73f2d344",
"0xb631ca2120fb6b0d450e6bbe82e6b638ec3d58e31175f53f72e5dc5066c6aad3",
"0x54c37f6bb3143037cb2341a256128af0779d967d97a6fb9cd00aeae2faf1e1b4",
"0xb307ed0c61d551ce0e73aaddbf1b7da80ca28a57751530103c09a5ecb234f037",
"0x9697233fc56e55fffecad6fa435e49dccf7107e726dc086afa10ff85fcf6afa0",
"0xb6fe1b786562b0f4ede6bcf127a1b6ca33dc35420409e9e5c563e0f29dcf4e2b",
"0x2a6e83af95259d376787a277c18107c778511ae0de5a792486d4e9dcbea5354f",
"0x7d70a01998e126367d02df2687359d6ea4b26280ed7a40924c0447c57a501933",
"0xa7cf29ff5bb373d09441f7184dbbe12ea2997d5f8afa95079b3fa6f2466633f2",
"0xc487782714b5640266dc7462fc7b1544afc1b3047e267b59dba55ce4f78dadc1"
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
            version: '^0.5.11'
        }
    }
};
