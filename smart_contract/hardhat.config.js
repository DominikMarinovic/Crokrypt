require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/1HGmqcrHWZfVoFfKlmcIv1ATFx3ZKoVH",
      accounts: [
        "bf4e939b0273241e234c83d2cd749ad9bbbd995e4b6af3e7ffa4fd7b3490c237",
      ],
    },
  },
};
