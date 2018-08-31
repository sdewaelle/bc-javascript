const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": 
    [{
        "index": 1,
        "timestamp": 1535633684341,
        "transactions": [],
        "nonce": 100,
        "hash": "0",
        "previousBlockHash": "0"
    },
    {
        "index": 2,
        "timestamp": 1535633892826,
        "transactions": [],
        "nonce": 18140,
        "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
        "previousBlockHash": "0"
    },
    {
        "index": 3,
        "timestamp": 1535633985581,
        "transactions": [{
            "amount": 12.5,
            "sender": "00",
            "recipient": "de1b8a50ac5311e89d172d9011edc645",
            "transactionId": "5a87f510ac5411e89d172d9011edc645"
        },
        {
            "amount": 200,
            "sender": "MSQF678DFKFJSNQDPR",
            "recipient": "QSDF14FGHJERSDFGFDS",
            "transactionId": "811de310ac5411e89d172d9011edc645"
        },
        {
            "amount": 500,
            "sender": "MSQF678DFKFJSNQDPR",
            "recipient": "QSDF14FGHJERSDFGFDS",
            "transactionId": "8750cd10ac5411e89d172d9011edc645"
        },
        {
            "amount": 30,
            "sender": "MSQF678DFKFJSNQDPR",
            "recipient": "QSDF14FGHJERSDFGFDS",
            "transactionId": "8ae5b3a0ac5411e89d172d9011edc645"
        }],
        "nonce": 51878,
        "hash": "000095c05a4ea253e5ae664c1122e2622fc92287ba1f623dee224a666b8f1a50",
        "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
        "index": 4,
        "timestamp": 1535634028360,
        "transactions": [{
            "amount": 12.5,
            "sender": "00",
            "recipient": "de1b8a50ac5311e89d172d9011edc645",
            "transactionId": "91a99300ac5411e89d172d9011edc645"
        },
        {
            "amount": 40,
            "sender": "MSQF678DFKFJSNQDPR",
            "recipient": "QSDF14FGHJERSDFGFDS",
            "transactionId": "a1f3a610ac5411e89d172d9011edc645"
        },
        {
            "amount": 50,
            "sender": "MSQF678DFKFJSNQDPR",
            "recipient": "QSDF14FGHJERSDFGFDS",
            "transactionId": "a4522f80ac5411e89d172d9011edc645"
        },
        {
            "amount": 60,
            "sender": "MSQF678DFKFJSNQDPR",
            "recipient": "QSDF14FGHJERSDFGFDS",
            "transactionId": "a6700670ac5411e89d172d9011edc645"
        },
        {
            "amount": 70,
            "sender": "MSQF678DFKFJSNQDPR",
            "recipient": "QSDF14FGHJERSDFGFDS",
            "transactionId": "a8691750ac5411e89d172d9011edc645"
        }],
        "nonce": 1975,
        "hash": "000001141e6e1ab811b01018f6691729c18db88d724d68522f4554eefc1ab011",
        "previousBlockHash": "000095c05a4ea253e5ae664c1122e2622fc92287ba1f623dee224a666b8f1a50"
    },
    {
        "index": 5,
        "timestamp": 1535634038332,
        "transactions": [{
            "amount": 12.5,
            "sender": "00",
            "recipient": "de1b8a50ac5311e89d172d9011edc645",
            "transactionId": "ab28faa0ac5411e89d172d9011edc645"
        }],
        "nonce": 15160,
        "hash": "0000dd87599283b55c049ffe307ce350258be0642bafa5db15d510ea724ee5e0",
        "previousBlockHash": "000001141e6e1ab811b01018f6691729c18db88d724d68522f4554eefc1ab011"
    },
    {
        "index": 6,
        "timestamp": 1535634040036,
        "transactions": [{
            "amount": 12.5,
            "sender": "00",
            "recipient": "de1b8a50ac5311e89d172d9011edc645",
            "transactionId": "b11a95e0ac5411e89d172d9011edc645"
        }],
        "nonce": 5756,
        "hash": "0000cb816a48feafd90b99c58c36d730fb7e7e811af2ba50cb4ed4f2cc59e55b",
        "previousBlockHash": "0000dd87599283b55c049ffe307ce350258be0642bafa5db15d510ea724ee5e0"
    }],
    "pendingTransactions": [{
        "amount": 12.5,
        "sender": "00",
        "recipient": "de1b8a50ac5311e89d172d9011edc645",
        "transactionId": "b21e9860ac5411e89d172d9011edc645"
    }],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));

/*
console.log(bitcoin);

const previousBlockHash = 'sfgFGDSFsd4155CWedggs';
const currentBlockData = [
    {
        amount: 10,
        sender: 's1ergrehgdgh',
        recipient: 'r1hgfdhjgdghj'
    },
    {
        amount: 20,
        sender: 's2gsfdhdfhtr',
        recipient: 'r2fdjhgddfg'
    },
    {
        amount: 30,
        sender: 's3gdjhjgfdgc',
        recipient: 'r3sdfgshgjhk'
    }
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
*/
/*
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
*/
/*

bitcoin.createNewBlock(238419, 'Mfd57dRFm9A', 'Ffgds474sqDE');
bitcoin.createNewTransaction(100, 'SEBgDSFS145dDF', 'CELf154sdfgSDFGg');

bitcoin.createNewBlock(111548, 'Fds7sdfsdqD', 'qsdfD1DS75DG');
bitcoin.createNewTransaction(50, 'SEBgDSFS145dDF', 'CELf154sdfgSDFGg');
bitcoin.createNewTransaction(300, 'SEBgDSFS145dDF', 'CELf154sdfgSDFGg');
bitcoin.createNewTransaction(2000, 'SEBgDSFS145dDF', 'CELf154sdfgSDFGg');

bitcoin.createNewBlock(285499, '324dsFQx4ws', 'fdh765DSQAxn');

console.log(bitcoin);
*/