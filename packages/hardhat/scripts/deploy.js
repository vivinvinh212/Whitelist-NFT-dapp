const ethers = require("hardhat");
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");
require("dotenv").config({ path: ".env" });

async function main() {
  const wlContract = WHITELIST_CONTRACT_ADDRESS;
  const metaurl = METADATA_URL;

  const nftContract = await ethers.getContractFactory("CryptoDevs");

  const deployedContract = await nftContract.deploy(
    metaurl,
    wlContract
  );

  console.log(
    "Deployed successful. NFT contract: ",
    deployedContract.address
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });