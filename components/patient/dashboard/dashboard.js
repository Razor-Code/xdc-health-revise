import Card from "../../utils/cards"
import Scaffold from "../../utils/scaffold"
import { links, testPatientDetails } from "../config"
import styles from "./dashboard.module.css"

// export default function PatientDashboard() {
//     return (
//         <Scaffold links={links} page="Dashboard">
//             {/* <div className="p-6">
//                 <h1 className="mt-6 text-4xl">Dashboard</h1>
//             </div> */}
//             <div className={styles.body}>
//     <div className={styles.main}>
//     <div className={styles.userdetails}>
//     <h2>Patient Details</h2>
    
//     <div className={styles.details}>
//     <img className={styles.img} src="https://fakeface.rest/face/view"></img>
//     <div className={styles.sub}>
//         <div className={styles.detail}>Name</div>
//         <div className={styles.detail1}><span>Rahul</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>Age</div>
//         <div className={styles.detail1}><span>16</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>Sex</div>
//         <div className={styles.detail1}><span>Male</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>Blood Group</div>
//         <div className={styles.detail1}><span>A+ve</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>Height</div>
//         <div className={styles.detail1}><span>171cm</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>weight</div>
//         <div className={styles.detail1}><span>70kg</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>Ph Number</div>
//         <div className={styles.detail1}><span>92822883300</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>Emergency </div>
//         <div className={styles.detail1}><span>94344382493</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>Address</div>
//         <div className={styles.detail1}><span>No: 7, TNHB</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>place</div>
//         <div className={styles.detail1}><span>Mogapppair</span></div>
//     </div>
//     <div className={styles.sub}>
//         <div className={styles.detail}>city</div>
//         <div className={styles.detail1}><span>Chennai</span></div>
//     </div>
//     </div>
//     </div>


//     <div className={styles.vital}>
//     <div className={styles.vital1}>
//     <h2>Vital stats Record</h2>
//     <div className={styles.meddetails}>
//     </div>
//     </div>

//     <div className={styles.vital1}>
//     <h2>Current Medication</h2>
//     <div className={styles.meddetails}>
//     </div>
//     </div>
//     </div>

    
//     </div>
//     </div>
//         </Scaffold>
//     )
// }

function Field(props){
    return (
        <div>
            <p className="text-bold">{props.name}</p>
            <br/>
            <p className="text-gray-500">{props.value}</p>
        </div>
    )
}

export default function PatientDashboard(){
    console.log(testPatientDetails)
    return (
        <Scaffold>

            <Card title="Personal Info">
                <div className="flex">
                    <img className="h-60 w-60" alt="image" src="https://fakeface.rest/face/view?gender=male"/>
                    <div className="flex flex-col items-center min-h-full w-full justify-center px-5">
                        {
                            // loop through the object
                            testPatientDetails.keys().map((key) => {
                                return <Field name={key} value={testPatientDetails[key]}/>
                            })
                        }
                    </div>
                </div>
            </Card>
        </Scaffold>
    )
}

/*string adhaarNumber;
        string name;
        string dob;
        string phone;
        string patientAddress;*/