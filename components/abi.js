
var address = "0xd67d297c5c8b25b18a7e1ae4c40d56f0fe5fe0fa";
var abi = require("./abi.json");
import {ethers} from "ethers";

const rpcurl = "https://rpc.apothem.network";

const provider = new ethers.providers.JsonRpcProvider(rpcurl);
console.log("provider is ",provider)

const loadWeb3 = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert(
            "Non-Xinfin browser detected. You should consider trying XDCpay"
        );
    }
    return window.web3;
};

async function getContract() {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address,abi,signer);
    return contract;
}


export {abi, address, getContract, loadWeb3};