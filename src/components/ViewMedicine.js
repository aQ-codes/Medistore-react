import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar";
import {  useSelector } from "react-redux";


function ViewMedicine() {
    var user = useSelector(store=>store.auth.user);

    var {medId} = useParams()
    var [med,setMed] = useState({name:'',company:'',expiry_date:''})

    useEffect(()=>{
        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+medId,{
            headers:{'Authorization':"Bearer "+ user.token}
         }).then(response=>{
            setMed(response.data)
        })
    },[medId]);
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header"><h3>{med.name}</h3></div>
                        <div className="card-body">
                            <p>{med.company}</p>
                            <p>{med.expiry_date}</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ViewMedicine;