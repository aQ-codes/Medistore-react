import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {  useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth"



function AddMedicine() {
    var user = useSelector(store=>store.auth.user);
    // console.log(medId)
    
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [date, setDate] = useState('');

    function addPost() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine',{
            name: name,
            company: company,
            expiry_date : date
        }, {
          headers:{'Authorization':"Bearer "+ user.token}
       }).then(response=>{
            navigate('/medicines')
        })
    }
    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Create Medicine</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <input
                        type = "text"
                        className="form-control" 
                        value={company} 
                        onChange={(event)=>{setCompany(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Expiry:</label>
                        <input
                        type = "text"
                        className="form-control" 
                        value={date} 
                        onChange={(event)=>{setDate(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={addPost}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}


export default checkAuth(AddMedicine);
