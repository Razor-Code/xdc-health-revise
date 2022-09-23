
var address = "0xd67d297c5c8b25b18a7e1ae4c40d56f0fe5fe0fa";
var abi = require("./abi.json");
import { ethers } from "ethers";
import Web3 from "xdc3"

// const rpcurl = "https://rpc.apothem.network";

// const provider = new ethers.providers.JsonRpcProvider(rpcurl, {
//     chainId: 51
// });
// console.log("provider is ", provider)

// const loadWeb3 = async () => {
//     if (window.ethereum) {
//         window.web3 = new Web3(window.ethereum);
//     } else if (window.web3) {
//         window.web3 = new Web3(window.web3.currentProvider);
//     } else {
//         window.alert(
//             "Non-Xinfin browser detected. You should consider trying XDCpay"
//         );
//     }
//     return window.web3;
// };

async function getContract() {
    const web3 = window.web3
    const contract = new web3.eth.Contract(abi, address)
    return contract
}


const loadWeb3 = async () => {
    if (FaWindows.ethereum) {
        window.web3 = new Web3(window.ethereum);
    }
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert("xinfin wallet not found")
    }
};

export { abi, address, loadWeb3, getContract };