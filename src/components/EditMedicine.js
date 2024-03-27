import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {  useSelector } from "react-redux";


function EditMedicine() {
    var user = useSelector(store=>store.auth.user);

    const {medId} = useParams();
    console.log(medId)

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [date, setDate] = useState('');

    let navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+medId,{
          headers:{'Authorization':"Bearer "+ user.token}
       }).then(response=>{
            setName(response.data.name);
            setCompany(response.data.company);
            setDate(response.data.expiry_date);
            console.log(response.data)
        })
    },[medId]);

    function updatemed(){
        axios.post('https://medicalstore.mashupstack.com/api/medicine/'+medId,{
            name: name,
            company: company,
            expiry_date : date
        },
        {
          headers:{'Authorization':"Bearer "+ user.token}
       }).then(response=>{
            alert(response.data.message)
        })
        navigate('/medicines');
    }
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Create Post</h1>
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
                        <button className="btn btn-primary float-right" onClick={updatemed}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default EditMedicine;