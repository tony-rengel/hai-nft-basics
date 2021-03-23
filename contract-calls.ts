import {
    broadcastTransaction,
    makeContractDeploy,
    StacksTransaction,
    TxBroadcastResultOk,
    TxBroadcastResultRejected,
  } from "@stacks/transactions";

  import { StacksTestnet } from "@stacks/network";

  import * as fs from "fs";
  const fetch = require("node-fetch");
  const BigNum = require("bn.js"
);

const noSidecar = true;
const mocknet = false;

export const STACKS_CORE_API_URL = "https://stacks-node-api.testnet.stacks.co";
export const STACKS_API_URL = "https://stacks-node-api.testnet.stacks.co";

export const network = new StacksTestnet();


export const secretKey = "213d180b5113835831208364cd2d1110ed8f8386c0f3129dc63f72b527ffc48c01";
export const contractAddress = "ST33F36Q24WMWZPC89597QRPZYE2FB7FA70D4RRQQ";


export async function handleTransaction(transaction: StacksTransaction) {
    const result = await broadcastTransaction(transaction, network);
    console.log(result);
    if ((result as TxBroadcastResultRejected).error) {
        if (
            (result as TxBroadcastResultRejected).reason === "ContractAlreadyExists"
        ) {
            console.log("already deployed");
            return "" as TxBroadcastResultOk;
        } else {
            throw new Error(
                `failed to handle transaction ${transaction.txid()}: ${JSON.stringify(
                    result
                )}`
            );
        }
    }
    const processed = await processing(result as TxBroadcastResultOk);
    if (!processed) {
        throw new Error(
            `failed to process transaction ${transaction.txid}: transaction not found`
        );
    }
    console.log(processed, result);
    return result as TxBroadcastResultOk;
}

export async function deployContract(
    contractName: string,
    options?: { path?: string; suffix?: string }
) {
    const codeBody = fs
        .readFileSync(options?.path || `./contracts/${contractName}.clar`)
        .toString();
    var transaction = await makeContractDeploy({
        contractName: `${contractName}${options?.suffix || ""}`,
        codeBody: codeBody,
        senderKey: secretKey,
        network,
    });
    console.log(`deploy contract ${contractName}`);
    return handleTransaction(transaction);
}

function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processing(tx: String, count: number = 0): Promise<boolean> {
    return noSidecar
        ? processingWithoutSidecar(tx, count)
        : processingWithSidecar(tx, count);
}

async function processingWithoutSidecar(
    tx: String,
    count: number = 0
): Promise<boolean> {
    await timeout(10000);
    return true;
}

async function processingWithSidecar(
    tx: String,
    count: number = 0
): Promise<boolean> {
    const url = `${STACKS_API_URL}/extended/v1/tx/${tx}`;
    var result = await fetch(url);
    var value = await result.json();
    console.log(count);
    if (value.tx_status === "success") {
        console.log(`transaction ${tx} processed`);
        console.log(value);
        return true;
    }
    if (value.tx_status === "pending") {
        console.log(value);
    } else if (count === 10) {
        console.log(value);
    }

    if (count > 30) {
        console.log("failed after 30 trials");
        console.log(value);
        return false;
    }

    if (mocknet) {
        await timeout(5000);
    } else {
        await timeout(50000);
    }
    return processing(tx, count + 1);
}