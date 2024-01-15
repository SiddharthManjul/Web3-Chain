// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BuyMeCoffee {
    // Event to emit when a Memo is Created.
    event NewMemo(
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

    // List of all memos received from Users.
    Memo[] memos;

    // Address of Contract Deployer.
    address payable owner;

    // Deploy Logic.
    constructor() {
        // Store the address of the deployer as a payable address.
        // When we withdraw funds, we'll withdraw here.
        owner = payable(msg.sender);
    }
    /**
     * @dev buy me a coffee
     * @param _name of the coffee buyer
     * @param _message a nice message from coffee buyer
     */

    function buyCoffee(string memory _name, string memory _message) public payable {
        require(msg.value > 0);

        // Add the memo to storage!
        memos.push(Memo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        ));

        // Emit an event when the memo is created!
        emit NewMemo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        );
    }

    /**
     * @dev send the entire balance stored in the contract to the owner!
     */

    function withdrawTips() public {
            require(owner.send(address(this).balance));
    }

    /**
     * @dev retrieve all the memos recieved and stored on the blockchan!
     */

    function getMemos() public view returns(Memo[] memory) {
        return memos;
    }
} 
