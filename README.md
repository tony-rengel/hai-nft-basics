# hai-nft-basics

## Create HAI NFT with file-inline specified values  

Example code for NFT creation in create-hai.ts, with definitions from contract-calls.ts  
```npx ts-node create-hai.ts```

## Recall NFT Values  

### Stacks CLI:  

`-t` for testnet, remove for mainnet calls.  
`call_read_only_contract_func` to call R/O func within smart contract.  
`ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ` owner address for smart contract  
`contract-hook-16472481878` name of deployed smart contract file  
`get-meta-data` read only function within smart contract. CLI will prompt for any needed input  
`ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ` requestor wallet's address  

```stx -t call_read_only_contract_func ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ contract-hook-16472481878 get-meta-data ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ```  
  
### TypeScript:  
Example code for NFT creation in query-hai.ts  
```npx ts-node query-hai.ts```  
  
    
      
        

## Reconfigure for New Wallets / TestNet / Prod


- ### Change contract owner to desired Stacks secret key/address  
`contract-calls.ts`  
``` export const secretKey = "213d180b5113835831208364cd2d1110ed8f8386c0f3129dc63f72b527ffc48c01";  
export const contractAddress = "ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ";
```
- ### Publish Smart Contract  
Validated and pushed through the [explorer Sandbox https://explorer.stacks.co/sandbox?chain=mainnet](https://explorer.stacks.co/sandbox?chain=mainnet)  
- Select appropriate Network from the top right dropdown
- Choose random name, select Deploy
- Ensure correct Wallet selects correct network, validate information, and Deploy
- Wait a while, and validate contract moves from Pending to Confirmed

### Modify values or extend NFT creation query
Sample NFT creation in `create-hai.ts`. Modify contract address, name, function, and metadata as needed 

```const contractAddress = 'ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ';
const contractName = 'contract-hook-16472481878';
const functionName = 'get-meta-data';
```

- ### Read values as needed
-- On-chain data is indexable and searchable in traditional centralized fashion.  
On-chain functions should limit to blockchain-specific features whenever possible.  
Future iterations can include as much search or similar functionality in-contract as desired.

`query-hai.ts`
Modify contract address, name, and function as appropriate 

```const contractAddress = 'ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ';
const contractName = 'contract-hook-16472481878';
const functionName = 'get-meta-data';



