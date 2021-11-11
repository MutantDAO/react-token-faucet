const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  const FCTToken = await hre.ethers.getContractFactory("FISHToken");
  const fctToken = await FCTToken.deploy("FISHToken", "FISH");
  
  await fctToken.deployed();
  
  console.log("Token deployed to:", fctToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });