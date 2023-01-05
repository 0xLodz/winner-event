require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_TESTNET_API_URL,
      accounts: [process.env.TESTNET_PRIVATE_KEY!],
    },
  },
};

export default config;
