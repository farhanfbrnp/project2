const { ethers, upgrades } = require("hardhat");
async function main () {
	// We get the contract to deploy
	const Box = await ethers.getContractFactory('AanGanteng');
	console.log('Deploying Box...');
	const box = await Box.deploy();
	await box.deployed();
	console.log('Box deployed to:', box.address);
  }
  
  main()
	.then(() => process.exit(0))
	.catch(error => {
	  console.error(error);
	  process.exit(1);
	});