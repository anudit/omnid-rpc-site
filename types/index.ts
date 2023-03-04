export type supportedNetworkIds = "mainnet" | "goerli" | "mainnet-flashbots" | "mainnet-flashbots-fast" | "rinkeby" | "sepolia" | "goerli-flashbots" | "polygon" | "polygon-testnet" | "polygon-zkevm" | "bsc" | "bsc-testnet" | "fantom" | "fantom-testnet" | "optimism" | "optimism-testnet" | "arbitrum" | "arbitrum-testnet" | "arbitrum-nova" | "base-testnet";

export type chainDataDeets = {
    rpc: string;
    chainId: `0x${string}`;
    chainName: string;
    blockExplorer: string;
    etherscanApi?: string;
}

export type RpcParam = {
    name: string,
    type: "hex" | "blockNumber" | "address" | "functionCall" | "boolean" | "number",
    required: boolean,
    description?: string;
}

export type RpcMethod = {
    description: string,
    params: Array<RpcParam>
}

export type Dictionary<T> = {
    [key: string]: T
}
