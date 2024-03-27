import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ListItem from "./ListItem";
import {  useSelector } from "react-redux";


function ListMedicine() {

  var user = useSelector(store=>store.auth.user);
  var [meds, setMeds]=useState([]);
  var [errorMessage, setErrorMessage] = useState('');

  function fetchMeds(){
      axios.get('https://medicalstore.mashupstack.com/api/medicine',{
        headers:{'Authorization':"Bearer "+ user.token}
     }).then(response=>{
          setMeds(response.data)
          console.log(response.data)
      })

  }
  useEffect(()=>{
      fetchMeds()
  },[])



  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">Medicines</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <Link to="/medicines/add" className="btn btn-info mb-2">
              Create Medicine
            </Link>
            
            <table class="table ">
              <tr>
                <th>Medicine</th>
                <th>Company</th>
                {/* <th>Description</th> */}
                {/* <th>Price</th> */}
                <th>Expiry Date</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
              <tbody>
              
                {meds.map(med =>  <tr><ListItem key={med.id} medicine={med} refresh={fetchMeds}/>  </tr> )} 
                

              </tbody>
            
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMedicine;
