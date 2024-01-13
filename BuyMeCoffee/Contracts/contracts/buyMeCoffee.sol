// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BuyMeCoffee {
    // Event to emit when a Memo is Created.
    event newMemo(
        address indexed from,
        uint256 timestamp,
        string name,
        string message
    );

    // Memo Struct.
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }

    // List of all memos recieved from Users.
    Memo[] memos;

    // Address of Contract Deployer.
    address payable owner;

    // Deploy Logic.
    constructor() {
        owner = payable(msg.sender);
    }
}
