# Week-2 Assignment

Deploy the contract:

Deploy the smart contract to a test network, such as the Ethereum Sapolia testnet or a local development blockchain like Ganache. Verify that the contract is deployed successfully and obtain the contract address.

Interact with the contract:

Write a script or use a tool like Remix to interact with the deployed contract. Perform basic actions like calling contract functions, reading contract state, and sending transactions.




## Setup

You can clone this repo and get going right away.

Just make sure to:
- run `npm install` to set up all the dependencies (hardhat, alchemySDK, etc.)
- rename `.env.example` to `.env` and then fill in the environment variables with your own info
- set up an Alchemy account [here](https://alchemy.com/?a=641a319005)
- set up a [Metamask](https://metamask.io/download.html) wallet with [fake Sapolia testnet ether](https://sepoliafaucet.com/)

And then you should be able to:
- run `npx hardhat run scripts/deploy.js` to deploy the contract to the Sapolia testnet
- run `npx hardhat run scripts/interact.js` to read and write a new message to the smart contract on Sapolia
- run `npx hardhat verify --network Sapolia <your deployment address> 'Hello World!'` to verify your contract on Etherscan


## Reference

[YouTube Playlist](https://www.youtube.com/watch?v=g73EGNKatDw&list=PLMj8NvODurfGgDJG-qQWyKtqTxJyRGI0i)

- [Part 1 Docs](https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract)
- [Part 2 Docs](https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/interacting-with-a-smart-contract)
- [Part 3 Docs](https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/submitting-your-smart-contract-to-etherscan)