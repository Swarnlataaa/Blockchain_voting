require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/27b20db1d4bc4ffd9c5528ea2a9ca002", // Replace with your Infura API key
      accounts: [], // Specify the accounts you want to use or omit this line for an empty array
    },
  },
};
