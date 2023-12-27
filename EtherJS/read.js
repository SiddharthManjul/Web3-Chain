const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
    `https://eth-mainnet.g.alchemy.com/v2/_hDbJee5R3PBoRVfGNY8ynYq4mZekxQP`
);

const queryBlockchain = async() => {
    const block = await provider.getBlockNumber();
    console.log("Current BLock Number: ", block);

    const balance = await provider.getBalance("0xC0EA20653c09D3542331397E8264c7BDf6208787");
    console.log("Account Balance (BigNumber)", balance);

    const balanceEther = ethers.utils.formatEther(balance);
    console.log("Account Balance in ETH", balanceEther);
}

queryBlockchain();
