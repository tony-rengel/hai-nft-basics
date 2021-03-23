import {
  makeContractCall,
  uintCV,
  stringAsciiCV,
} from "@stacks/transactions";
import {
  contractAddress,
  secretKey,
  network,
  handleTransaction,
} from "./contract-calls";

const BigNum = require("bn.js");

const haiTitle = "Tony Test New";
const targetAIP = "tony.aip";
const allocatedTimeblocks = 32000;

//
/// Contract calls
//
async function createHai(haiTitle: string, targetAIP: string, allocatedTimeblocks: number) {
  console.log("create haiToken");

  const transaction = await makeContractCall({
    contractAddress,
    contractName: "contract-hook-16472481878",
    functionName: "create-hai",
    functionArgs: [stringAsciiCV(haiTitle), stringAsciiCV(targetAIP), uintCV(allocatedTimeblocks)],
    senderKey: secretKey,
    network,
  });

  return handleTransaction(transaction);
}

const valueTest = createHai(haiTitle, targetAIP, allocatedTimeblocks);