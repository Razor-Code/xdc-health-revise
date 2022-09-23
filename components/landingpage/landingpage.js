import { useWeb3 } from "@3rdweb/hooks"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { loadWeb3 } from "../abi"
import Field from "../utils/field"
import Modal from "../utils/modal"
import Web3 from "web3"
import abi from "../abi.json"
import { FaWindows } from "react-icons/fa"
import { getAccountPath } from "ethers/lib/utils"

function Card(props) {
  return (
    <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg bg-white">
      <p className="font-medium text-gray-500 uppercase">
        {props.type}
      </p>
      <img src={props.image} className="h-40 w-40 mx-auto" />
      <button onClick={props.onClick} className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-80">
        Continue
      </button>
    </div>
  )
}

export default function LandingPage() {
  const { address, connectWallet, } = useWeb3();
  const [patientModal, setPatientModal] = useState(false)
  const [adhaar, setAdhaar] = useState("")
  const router = useRouter()
  let contract;

  // organisation variables
  const [orgModal, setOrgModal] = useState(false)
  const [orgName, setOrgName] = useState("")
  const [orgDesc, setOrgDesc] = useState("")
  const [orgWebsite, setOrgWebsite] = useState("")

  useEffect(() => {
    // TODO: fetch the data from the smart contract and redirect to the correct page
  }, [address])
  useEffect(() => {
    if (FaWindows.ethereum) {
      window.web3 = new Web3(window.ethereum);
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("xinfin wallet not found")
    }

    var acc = "0xfCe47A914f83eb7973Bd146294155b2887b61B8b"
    const web3 = window.web3
    console.log(web3)
    const contract = new web3.eth.Contract(abi, "0xd67d297c5c8b25b18a7e1ae4c40d56f0fe5fe0fa")
    console.log(contract)
    let res = contract.methods.findSenderType().send({ from: "0x4fa27ec2cb22fe4596fb00df9a8cc36b8a995426" })
    console.log(res)
  }, [])

  const handleConnect = async (value) => {
    await connectWallet("injected")
    if (value == "organisation") {
      setOrgModal(true)
    }
  }

  const handleSubmitOrg = async () => {
    // await loadWeb3()
    // const cont = await getContract()
    // await cont.createOrganisation(orgName, orgDesc, orgWebsite);
    // console.log(cont)
    // let a = await cont.findSenderType()
    // console.log(a);

  }


  // loadBlockchainData = async () => {
  //   const web3 = window.web3;
  //   const accounts = await web3.eth.getAccounts();
  //   var Web3 = require('web3');
  //   var web = Web3.givenProvider
  //   console.log(web)
  // }

  const handleSubmitPatient = async () => {
    // TODO: check if it is a valid patient
    // let result = await contract.methods.findSenderType()
    // TODO: register it in the cookie
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen w-full">
      <div className="container px-6 py-8 mx-auto">
        <img src="/assets/xdc-health-icon.svg" className="h-20 w-20 mx-auto" />
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">
          XDC Health {address}
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6">
          A decentralized health record management system
        </p>
        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 select-none">
          <Card type="Hospital" image="/assets/admin.png" onClick={() => handleConnect("organisation")} />
          <Card type="Patient" image="/assets/patient.png" onClick={() => setPatientModal(true)} />
          <Card type="Doctor" image="/assets/doctor.png" onClick={() => handleConnect("doctor")} />
        </div>
      </div>
      <Modal isOpen={patientModal} onSubmit={handleSubmitPatient} onCancel={() => setPatientModal(false)}>
        <Field label="Adhaar Number" type="text" onChange={(e) => setAdhaar(e.target.value)} />
      </Modal>
      <Modal isOpen={orgModal} onSubmit={handleSubmitOrg} onCancel={() => setOrgModal(false)}>
        <Field label="Organisation Name" type="text" onChange={(e) => setOrgName(e.target.value)} />
        <Field label="Description" type="text" onChange={(e) => setOrgDesc(e.target.value)} />
        <Field label="Website" type="text" onChange={(e) => setOrgWebsite(e.target.value)} />
      </Modal>
    </div>
  )
}