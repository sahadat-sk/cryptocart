import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const ecommerce = await ethers.deployContract("Ecommerce");
  await ecommerce.waitForDeployment();
  await ecommerce.addAdmin("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
  console.log(
    `Ecommerce deployed to ${ecommerce.target} by ${deployer.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
