import Scaffold from "../../utils/scaffold"
import Sidebar from "../../utils/sidebar"
import { links } from "../config"

export default function DoctorProfile() {
    return (
        <Scaffold links={links} page="Profile">
            Hello, world
        </Scaffold>
    )
}