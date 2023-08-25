// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract CrowdFunding {
    address public owner;
    uint256 public goalAmount;
    uint256 public raisedAmount;
    mapping(address => uint256) public contributions;
    bool public isGoalReached;
    bool public isClosed;

    event Contribute(address indexed contributor, uint256 amount);
    event GoalReached(uint256 totalAmount);

    constructor(uint256 _goalAmount) {
        owner = msg.sender;
        goalAmount = _goalAmount;
        raisedAmount = 0;
        isGoalReached = false;
        isClosed = false;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyOpen() {
        require(!isClosed, "Crowdfunding is closed");
        _;
    }

    function contribute() external payable onlyOpen {
        require(msg.value > 0, "Contribution amount must be greater than 0");
        
        contributions[msg.sender] += msg.value;
        raisedAmount += msg.value;

        emit Contribute(msg.sender, msg.value);

        if (raisedAmount >= goalAmount && !isGoalReached) {
            isGoalReached = true;
            emit GoalReached(raisedAmount);
        }
    }

    function withdrawFunds() external onlyOwner {
        require(isGoalReached, "Goal not reached");
        
        uint256 amount = raisedAmount;
        raisedAmount = 0;
        isClosed = true;

        payable(owner).transfer(amount);
    }
}
