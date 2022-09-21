import { useState } from "react";
import Modal from "../../utils/modal";
import Scaffold from "../../utils/scaffold";
import Table from "../../utils/table";
import Tabs from "../../utils/tabs";
import { dashboardTabs, links } from "../config"

export default function DoctorDashboard() {
    let today = new Date();
    const [currentTab, setCurrentTab] = useState("Upcoming Applications")

    const handleTabClick = (value) => {
        console.log(value)
        if (value != currentTab) setCurrentTab(value)
    }

    return (
            <Scaffold links={links} page="Dashboard">
                <div className="">
                    <h1 className="mt-6 text-4xl">Welcome, Doctor</h1>
                    <h3>Today is {today.toDateString()} </h3>
                </div>
                <div className="py-3">
                    <Tabs onClick={handleTabClick} tabs={dashboardTabs} current={currentTab} />
                </div>
                <div>
                    <Table />
                </div>
                <Modal isOpen={true}/>
                </Scaffold>
    )
}