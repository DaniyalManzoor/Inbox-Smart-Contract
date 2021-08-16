// Deployed On Rinkeby

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.RINKEBY_INFURA_IO
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from accounts", accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ["Hi there!"] })
      .send({ from: accounts[0], gas: "1000000" });

    console.log(result.options.address);
  } catch (ex) {
    console.log(ex);
  }
};
deploy();
