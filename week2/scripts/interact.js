const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");

const { Network, Alchemy, Wallet, Contract } = require('alchemy-sdk');
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
const settings = {
  apiKey: API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_SEPOLIA, // Replace with your network.
};

//provider - Alchemy
// const alchemyProvider = new ethers.providers.AlchemyProvider(network="sapolia", API_KEY);
const alchemyProvider = new Alchemy(settings);
//  console.log(alchemyProvider);
//signer - You
// const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const signer =  new Wallet(PRIVATE_KEY,alchemyProvider);

//contract instance
// const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
const helloWorldContract = new Contract(CONTRACT_ADDRESS, contract.abi, signer);
// console.log(JSON.stringify(contract.abi));

async function main() {

    const message = await helloWorldContract.message();
    console.log("the message is: " + message);

    console.log("Updating the message...");

    const tx = await helloWorldContract.update("This is the new Message to Seyi Olawepo");

    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage)
    //contract.update("goodbye world")

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });