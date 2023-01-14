export type supportedNetworkIds = "mainnet" | "goerli" | "mainnet-flashbots" | "mainnet-flashbots-fast" | "rinkeby" | "sepolia" | "goerli-flashbots" | "polygon" | "polygon-testnet" | "polygon-zkevm" | "bsc" | "bsc-testnet" | "fantom" | "fantom-testnet" | "optimism" | "optimism-testnet" | "arbitrum" | "arbitrum-testnet" | "arbitrum-nova";

export type chainDataDeets = {
    rpc: string;
    chainId: `0x${string}`;
    chainName: string;
    blockExplorer: string;
}
