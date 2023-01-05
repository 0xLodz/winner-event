// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IWinner {
    function attempt() external;
}

contract Contract {
    function triggerAttempt(address winner) external {
        IWinner(winner).attempt();
    }
}
