import { Dictionary, RpcMethod } from "../types";

const supportFunctions: Dictionary<RpcMethod> = {
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
    'net_version': {
        description: "Returns the current network id.",
        params: []
    },
    'net_listening': {
        description: "Returns `true` if client is actively listening for network connections.",
        params: []
    },
    'net_peerCount': {
        description: "Returns number of peers currently connected to the client.",
        params: []
    },
    'eth_protocolVersion': {
        description: "Returns the current ethereum protocol version.",
        params: []
    },
    'eth_syncing': {
        description: "Returns an object with data about the sync status or false.",
        params: []
    },
    'eth_coinbase': {
        description: "Returns the client coinbase address.",
        params: []
    },
    'eth_getStorageAt': {
        description: "Returns the value from a storage position at a given address.",
        params: [{
            name: 'account',
            type: 'address',
            required: true,
            description: 'Address of the storage'
        },
        {
            name: 'position',
            type: 'hex',
            required: true,
            description: 'Hex of the position in the storage'
        },
        {
            name: 'block',
            type: 'blockNumber',
            required: true,
            description: "Block Number or latest, earliest, pending"
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
                required: true,
                description: 'Block Number'
            }
        ]
    },
    'eth_accounts': {
        description: "Returns a list of addresses owned by client.",
        params: []
    },
    'eth_getTransactionCount': {
        description: "Returns the number of transactions sent from an address.",
        params: [{
            name: 'address',
            type: 'hex',
            required: true
        },
        {
            name: 'block',
            type: 'blockNumber',
            required: true,
            description: 'Block Number'
        }]
    },
    'eth_getBlockTransactionCountByHash': {
        description: "Returns the number of transactions in a block from a block matching the given block hash.",
        params: [{
            name: 'Blockhash',
            type: 'hex',
            required: true,
            description: 'Block Hash'
        }]
    },
    'eth_getBlockTransactionCountByNumber': {
        description: "Returns the number of transactions in a block matching the given block number.",
        params: [{
            name: 'block',
            type: 'blockNumber',
            required: true,
            description: 'Block Number'
        }]
    },
    'eth_getUncleCountByBlockHash': {
        description: "Returns the number of uncles in a block from a block matching the given block hash.",
        params: [{
            name: 'Blockhash',
            type: 'hex',
            required: true,
            description: 'Hash of a block to get uncle count from'
        }]
    },
    'eth_getUncleCountByBlockNumber': {
        description: "Returns the number of uncles in a block from a block matching the given block number.",
        params: [{
            name: 'block',
            type: 'blockNumber',
            required: true,
            description: 'Hex of a block to get uncle count from'
        }]
    },
    'eth_getCode': {
        description: "Returns code at a given address.",
        params: [{
            name: 'address',
            type: 'hex',
            required: true,
            description: 'Address to fetch code from'
        },
        {
            name: 'block',
            type: 'blockNumber',
            required: true,
            description: 'Hex block number'
        }]
    },
    'eth_sendRawTransaction': {
        description: "Creates new message call transaction or a contract creation for signed transactions.",
        params: [{
            name: 'data',
            type: 'hex',
            required: true,
            description: 'The signed transaction data'
        }]
    },
    'eth_call': {
        description: "Call any read-only function on a deployed contract.",
        params: [{
            name: 'address',
            type: 'functionCall',
            required: true,
        }]
    },
    'eth_getBlockByHash': {
        description: "Returns information about a block by hash.",
        params: [{
            name: 'BlockHash',
            type: 'hex',
            required: true,
            description: 'Block Hash'
        },{
            name: 'isFull',
            type: 'boolean',
            required: false,
            description: 'Show Full Block Details?'
        }]
    },
    'eth_getBlockByNumber': {
        description: "Returns information about a block by block number.",
        params: [{
            name: 'BlockNumber',
            type: 'blockNumber',
            required: true,
            description: 'Block Number or latest, earliest, pending'
        },{
            name: 'isFull',
            type: 'boolean',
            required: false,
            description: 'Show Full Block Details?'
        }]
    },
    'eth_getTransactionByHash': {
        description: "Returns the information about a transaction requested by transaction hash.",
        params: [{
            name: 'BlockHash',
            type: 'hex',
            required: true,
            description: 'Block Hash'
        }]
    },
    'eth_getTransactionByBlockHashAndIndex': {
        description: "Returns information about a transaction by block hash and transaction index position.",
        params: [{
            name: 'BlockHash',
            type: 'hex',
            required: true,
            description: 'Block Hash'
        },
        {
            name: 'index',
            type: 'number',
            required: true,
            description: 'Transaction index'
        }]
    },
    'eth_getTransactionByBlockNumberAndIndex': {
        description: "Returns information about a transaction by block number and transaction index position.",
        params: [{
            name: 'BlockNumber',
            type: 'blockNumber',
            required: true,
            description: 'Block Number or latest, earliest, pending'
        },
        {
            name: 'index',
            type: 'number',
            required: true,
            description: 'Transaction index'
        }]
    },
    'eth_getTransactionReceipt': {
        description: "Returns the receipt of a transaction by transaction hash.",
        params: [{
            name: 'TransactionHash',
            type: 'hex',
            required: true,
            description: 'Transaction Hash'
        }]
    },
    'eth_getUncleByBlockHashAndIndex': {
        description: "Returns information about a uncle of a block by hash and uncle index position.",
        params: [{
            name: 'BlockHash',
            type: 'hex',
            required: true,
            description: 'Block Hash'
        },
        {
            name: 'index',
            type: 'number',
            required: true,
            description: 'Transaction index'
        }]
    },
    'eth_getUncleByBlockNumberAndIndex': {
        description: "Returns information about a uncle of a block by number and uncle index position.",
        params: [{
            name: 'BlockNumber',
            type: 'blockNumber',
            required: true,
            description: 'Block Number or latest, earliest, pending'
        },
        {
            name: 'index',
            type: 'number',
            required: true,
            description: 'Transaction index'
        }]
    },
}

export default supportFunctions;
