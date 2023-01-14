
const supportFunctions = {
    'web3_clientVersion': {
        description: "Returns the current client version.",
        params: []
    },
    'web3_sha3': {
        description: "Returns Keccak-256 (not the standardized SHA3-256) of the given data.",
        params: [{
            name: 'data',
            type: 'hex',
            required: true
        }]
    },
    'eth_chainId': {
        description: "Returns the chain ID of the current network.",
        params: []
    },
    'eth_blockNumber': {
        description: "Returns the number of most recent block.",
        params: []
    },
    'eth_gasPrice': {
        description: "Returns the current price per gas in wei.",
        params: []
    },
    'eth_maxPriorityFeePerGas': {
        description: "Returns the current maxPriorityFeePerGas per gas in wei.",
        params: []
    },
    'eth_getBalance': {
        description: "Returns the balance of the account of given address.",
        params: [
            {
                name: 'account',
                type: 'hex',
                required: true
            },
            {
                name: 'block',
                type: 'blockNumber',
                required: true
            }
        ]
    }
}

export default supportFunctions;
