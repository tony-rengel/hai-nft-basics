import {
  makeContractCall,
  contractPrincipalCV,
  bufferCVFromString,
  makeSTXTokenTransfer,
  standardPrincipalCV,
  stringUtf8CV,
  listCV,
  noneCV,
  tupleCV,
  uintCV,
  stringAsciiCV,
  PostConditionMode,
  broadcastTransaction,
  makeContractDeploy,
  StacksTransaction,
  TxBroadcastResultOk,
  TxBroadcastResultRejected,
} from "@stacks/transactions";
import {
  contractAddress,
  secretKey,
  network,
  handleTransaction,
  deployContract,
} from "./contract-calls";

const BigNum = require("bn.js");

const haiTitle = "testHai";
const targetAIP = "suman.aip";
const allocatedTimeblocks = 500000;

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

const valueTest = createHai("First HAI Token", "suman.aip", 500000);
console.log("end line" + valueTest + " value test" );