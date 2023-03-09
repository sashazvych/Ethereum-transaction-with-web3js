import Web3 from 'web3';

const FROM = '0x7c052f10fe08fe373d6fa55db6484bc86a56df6a';
const TO = '0x8e7F03D930F9001A2b1dd0156B465A7A16cAdf08';
const PRIVATE_KEY = 'XXXXXXXXXXXXXX'

async function main() {
  const web3 = new Web3('https://rpc-mumbai.maticvigil.com/');
  const kmatrans = {
    to: TO,
    from: FROM,
    gas: 30000,
    value:  web3.utils.toWei('0.01', 'ether'),
    data: web3.utils.toHex('Oleksandra Zolotarevych '),
  }
  await web3.eth.accounts.signTransaction(kmatrans, PRIVATE_KEY).then(signed => {
  web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
  })
}

main();
