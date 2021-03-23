# hai-nft-basics

## Create HAI NFT with file-inline specified values  

Example code for NFT creation in create-hai.ts, with definitions from contract-calls.ts  
```npx ts-node create-hai.ts```

##Recall NFT Values  

###Stacks CLI:  

`-t` for testnet, remove for mainnet calls.  
`call_read_only_contract_func` to call R/O func within smart contract.  
`ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ` owner address for smart contract  
`contract-hook-16472481878` name of deployed smart contract file  
`get-meta-data` read only function within smart contract. CLI will prompt for any needed input  
`ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ` requestor wallet's address  

```stx -t call_read_only_contract_func ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ contract-hook-16472481878 get-meta-data ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ```  
  
###TypeScript:  
Example code for NFT creation in query-hai.ts  
```npx ts-node query-hai.ts```  
  