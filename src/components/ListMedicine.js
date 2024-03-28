import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import ListItem from "./ListItem";
import {  useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth"

function ListMedicine() {

    var user = useSelector(store=>store.auth.user);
    var [meds, setMeds]=useState([]);
    var [filteredMeds, setFilteredMeds] = useState([]);
    const [SearchTerm, setSearchTerm] = useState("");
    let navigate = useNavigate();
    // var [errorMessage, setErrorMessage] = useState('');

    const handleSearchInputChange = (event) => {
      event.preventDefault();
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = (event) => {
      event.preventDefault();
      if (SearchTerm.trim() === "") {
        // If the search input is empty, reset the filteredPosts state.
        setFilteredMeds(meds);
      } else {
        // Otherwise, filter the posts based on the search term.
        var filteredItems = meds.filter((item) =>
          item.name.toLowerCase().includes(SearchTerm.toLowerCase())
        );
        setFilteredMeds(filteredItems);
      }
    };





    function fetchMeds(){
      if (user){
        
        axios.get('https://medicalstore.mashupstack.com/api/medicine',{
          headers:{'Authorization':"Bearer "+ user.token}
      }).then(response=>{
            setMeds(response.data)
            setFilteredMeds(response.data);
            console.log(response.data)
        })
      }
      else{
        navigate('/login');
      }
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

            <form>
              <label>Search Medicines :  &nbsp;</label>
              <input
                type="text"
                value={SearchTerm}
                onChange={handleSearchInputChange}
              />
              &nbsp;
              <button
                className="btn btn-small btn-outline-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
              &nbsp;
            </form>

            
            <table className="table ">
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
              
                {/* {meds.map(med =>  <tr><ListItem key={med.id} medicine={med} refresh={fetchMeds}/>  </tr> )}  */}
                {filteredMeds.length === 0 ? (
                  <p>No matching posts found.</p>
                 ) 
                 : (
                  filteredMeds.map((med) => ( <tr><ListItem key={med.id} medicine={med} refresh={fetchMeds}/>  </tr>      ))
                 

                 )}
                

              </tbody>
            
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


export default checkAuth(ListMedicine);
