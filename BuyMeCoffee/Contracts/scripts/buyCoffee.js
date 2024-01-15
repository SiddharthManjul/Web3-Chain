// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require("@nomicfoundation/hardhat-ethers");

// Returns the ethers balance of a given address.
async function balance(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  console.log(balanceBigInt);
  return hre.ethers.formatEther(balanceBigInt);
}

// Logs the ethers balance for a list of addresses.
async function printBalances(addresses) {
  let idx = 0;
  for (const address of addresses) {
    console.log("Address " + address + " balance" + await balance(address));
    idx++;
  }
}

// Logs the memos stored on-chain from coffee purchases.
const printMemos = async(memos) => {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const tipper = memo.name;
    const tipperAddress = memo.address;
    const tipperMessage = memo.message;
    console.log(`At &{timestamp}, &{tipper} (address: &{tipperAddress}) said: &{tipperMessage}`);
  }
}

async function main() {
  
  // Get example accounts.
  const [owner, tipper1, tipper2, tipper3] = await hre.ethers.getSigners();

  // Get the contrract to deploy.
  const BuyMeCoffee = await hre.ethers.getContractFactory("BuyMeCoffee");

  // Deploy Contract.
  const buyMeCoffee = await BuyMeCoffee.deploy();
  await buyMeCoffee.waitForDeployment();
  console.log("BuyMeCoffee deployed to: ", buyMeCoffee.address);

  // Check balances before the coffee purchase.
  const addresses = [owner.address, tipper1.address, buyMeCoffee.address]
  console.log("===start===");
  await printBalances(addresses);

  // Buy the owner a coffee

  // Check balances after coffee purchases.

  // Withdraw funds.

  // Check balance after withdraw

  // Read all the memos left for the owner
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
