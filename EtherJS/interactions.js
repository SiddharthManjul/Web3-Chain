const { ethers } = require("ethers");
require("dotenv").config();
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/UEWeBqCKv_CCuHyvSLNqi_ndoJ_xmIm6`
);

const walletAddress = process.env.SENT_WALLET_ADDRESS;
const walletAbi = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractInteraction = async() => {
	const walletContract = new ethers.Contract(walletAddress, walletAbi, provider);

	const contractName = await walletContract.name();
	console.log("Contract name:",contractName);

	const num = await walletContract.getValue();
	const numInEther = ethers.utils.formatEther(num);
	console.log("Number Value:", String(num)); // String(num) can be used aswell in BigNumber

	const contractBalance = await walletContract.contractBalance();
	const contractBalanceInEther = ethers.utils.formatEther(contractBalance);
	console.log("Balance:", contractBalanceInEther);

	const accountBalance = await walletContract.accountBalance(process.env.WALLET_ADDRESS);
	const balanceInEther = ethers.utils.formatEther(accountBalance);
	console.log("User Balance:", balanceInEther);
}

contractInteraction();