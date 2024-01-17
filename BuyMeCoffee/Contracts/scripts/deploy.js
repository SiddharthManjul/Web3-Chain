const hre = require("hardhat");

const main = async() => {
    // Get the contract and deploy.
    const BuyMeCoffee = await hre.ethers.getContractFactory("BuyMeCoffee");
    const buyMeCoffee = await hre.ethers.deployContract("BuyMeCoffee", BuyMeCoffee);
    await buyMeCoffee.waitForDeployment();
    console.log(`Contract is deployed at: ${buyMeCoffee.target}`);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
