import hre from "hardhat";

(async function main() {
  const Contract = await hre.ethers.getContractAt(
    "Contract",
    // deployed contract address from the `deploy.ts` script.
    "0x47c02373B80dA00977D926F2499673F198784599"
  );
  // deployed Winner contract address
  await Contract.triggerAttempt(process.env.WINNER_CONTRACT_ADDRESS!);
  console.log("Winner contract triggered");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
