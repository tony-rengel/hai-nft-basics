import {
    uintCV,
    callReadOnlyFunction,
  } from "@stacks/transactions";  
  import { StacksTestnet } from "@stacks/network";
import { stringify } from "node:querystring";
   
  //
  /// Contract calls
  //
  const contractAddress = 'ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ';
  const contractName = 'contract-hook-16472481878';
  const functionName = 'get-meta-data';
  const buffer = uintCV(5);
  const network = new StacksTestnet();
  const senderAddress = 'ST2F4BK4GZH6YFBNHYDDGN4T1RKBA7DA1BJZPJEJJ';
   
  const options = {
    contractAddress,
    contractName,
    functionName,
    functionArgs: [buffer],
    network,
    senderAddress,
  };

  
  
  async function queryNFT(nftID: number) {   

    const nftObject = await callReadOnlyFunction(options);
    console.log (JSON.stringify(nftObject, null, 2));
}

queryNFT(1);



  



