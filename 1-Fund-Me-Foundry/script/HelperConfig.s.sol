// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/*
Things this contract will do:
1. Deploy mocks when we are on local chain
2. Keep track of contract addresses across different chains
Example - Sepolia ETH/USD address is different from mainnet ETH/USD address.
*/

import {Script} from "forge-std/Script.sol";

contract HelperConfig is Script {
    // If we are on a local anvil, we deploy mocks
    // Otherwise, grab the existing address from the live network

    struct NetworkConfig {
        address priceFeed; // ETH/USD price feed addresses
    }

    function getSepoliaEthConfig() public pure returns (NetworkConfig memory) {
        // price feed address
        NetworkConfig memory sepoliaConfig = NetworkConfig({
            priceFeed: 0x694AA1769357215DE4FAC081bf1f309aDC325306
        });
        return sepoliaConfig;
    }

    function getAnvilEthConfig() public pure returns (NetworkConfig memory) {
        // price feed address
    }
}