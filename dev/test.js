const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();


bitcoin.createNewBlock(238419, 'Mfd57dRFm9A', 'Ffgds474sqDE');
bitcoin.createNewTransaction(100, 'SEBgDSFS145dDF', 'CELf154sdfgSDFGg');

bitcoin.createNewBlock(111548, 'Fds7sdfsdqD', 'qsdfD1DS75DG');
bitcoin.createNewTransaction(50, 'SEBgDSFS145dDF', 'CELf154sdfgSDFGg');
bitcoin.createNewTransaction(300, 'SEBgDSFS145dDF', 'CELf154sdfgSDFGg');
bitcoin.createNewTransaction(2000, 'SEBgDSFS145dDF', 'CELf154sdfgSDFGg');

bitcoin.createNewBlock(285499, '324dsFQx4ws', 'fdh765DSQAxn');

console.log(bitcoin);
