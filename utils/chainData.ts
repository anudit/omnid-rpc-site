import { chainDataDeets, supportedNetworkIds } from "../types";

const networks = new Map<supportedNetworkIds, chainDataDeets>([
    ["mainnet", {
        "rpc": `https://rpc.omnid.space/mainnet`,
        "chainId": "0x1",
        "chainName": "Omnid Ethereum Mainnet",
        "blockExplorer": "https://etherscan.io"
    }],
    ["mainnet-flashbots", {
        "rpc": `https://rpc.omnid.space/mainnet-flashbots`,
        "chainId": "0x1",
        "chainName": "Omnid Flashbots Mainnet",
        "blockExplorer": "https://etherscan.io"
    }],
    ["mainnet-flashbots-fast", {
        "rpc": `https://rpc.omnid.space/mainnet-flashbots-fast`,
        "chainId": "0x1",
        "chainName": "Omnid Flashbots Mainnet Fast",
        "blockExplorer": "https://etherscan.io"
    }],
    ["rinkeby", {
        "rpc": `https://rpc.omnid.space/rinkeby`,
        "chainId": "0x4",
        "chainName": "Omnid Rinkeby Testnet",
        "blockExplorer": "https://rinkeby.etherscan.io"
    }],
    ["goerli", {
        "rpc": `https://rpc.omnid.space/goerli`,
        "chainId": "0x5",
        "chainName": "Omnid Goerli Testnet",
        "blockExplorer": "https://goerli.etherscan.io"
    }],
    ["sepolia", {
        "rpc": `https://rpc.omnid.space/sepolia`,
        "chainId": "0xAA36A7",
        "chainName": "Omnid Sepolia Testnet",
        "blockExplorer": "https://sepolia.etherscan.io"
    }],
    ["goerli-flashbots", {
        "rpc": `https://rpc.omnid.space/goerli-flashbots`,
        "chainId": "0x5",
        "chainName": "Omnid Flashbots Goerli",
        "blockExplorer": "https://goerli.etherscan.io"
    }],
    ["polygon", {
        "rpc": `https://rpc.omnid.space/polygon`,
        "chainId": "0x89",
        "chainName": "Omnid Polygon",
        "blockExplorer": "http://polygonscan.com"
    }],
    ["polygon-testnet", {
        "rpc": `https://rpc.omnid.space/polygon-testnet`,
        "chainId": "0x13881",
        "chainName": "Omnid Polygon Testnet",
        "blockExplorer": "http://mumbai.polygonscan.com"
    }],
    ["polygon-zkevm", {
        "rpc": `https://rpc.omnid.space/polygon-zkevm`,
        "chainId": "0x58E",
        "chainName": "Omnid Polygon zkEVM Testnet",
        "blockExplorer": "https://explorer.public.zkevm-test.net"
    }],
    ["bsc", {
        "rpc": `https://rpc.omnid.space/bsc`,
        "chainId": "0x38",
        "chainName": "Omnid BSC",
        "blockExplorer": "https://bscscan.com"
    }],
    ["bsc-testnet", {
        "rpc": `https://rpc.omnid.space/bsc-testnet`,
        "chainId": "0x61",
        "chainName": "Omnid BSC Testnet",
        "blockExplorer": "https://testnet.bscscan.com"
    }],
    ["fantom", {
        "rpc": `https://rpc.omnid.space/fantom`,
        "chainId": "0xFA",
        "chainName": "Omnid Fantom",
        "blockExplorer": "https://ftmscan.com"
    }],
    ["fantom-testnet", {
        "rpc": `https://rpc.omnid.space/fantom-testnet`,
        "chainId": "0xFA2",
        "chainName": "Omnid Fantom Testnet",
        "blockExplorer": "https://testnet.ftmscan.com"
    }],
    ["optimism", {
        "rpc": `https://rpc.omnid.space/optimism`,
        "chainId": "0xA",
        "chainName": "Omnid Optimism",
        "blockExplorer": "https://optimistic.etherscan.io"
    }],
    ["optimism-testnet", {
        "rpc": `https://rpc.omnid.space/optimism-testnet`,
        "chainId": "0x1A4",
        "chainName": "Omnid Optimism Testnet",
        "blockExplorer": "https://blockscout.com/optimism/goerli"
    }],
    ["arbitrum", {
        "rpc": `https://rpc.omnid.space/arbitrum`,
        "chainId": "0xA4B1",
        "chainName": "Omnid Arbitrum",
        "blockExplorer": "https://arbiscan.io"
    }],
    ["arbitrum-nova", {
        "rpc": `https://rpc.omnid.space/arbitrum-nova`,
        "chainId": "0xA4BA",
        "chainName": "Omnid Arbitrum Nova",
        "blockExplorer": "https://nova.arbiscan.io"
    }],
    ["arbitrum-testnet", {
        rpc: `https://rpc.omnid.space/arbitrum-testnet`,
        chainId: '0x66EED',
        chainName: 'Omnid Arbitrum Testnet',
        blockExplorer: 'https://goerli.arbiscan.io'
    }]
    ])

export default networks;
