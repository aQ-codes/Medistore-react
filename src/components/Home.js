import React from 'react'
import Navbar from './Navbar';
import { Link } from "react-router-dom";



function Home() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <div className="jumbotron">
  <h1 className="display-4">Welcome to MediStore!</h1>
  <p className="lead">Better Solutions for Medicine Products Management </p>
  <hr className="my-4"/>
  <p>What are you looking for?</p>
  <p className="lead">
    
    <Link to="/medicines" ><a className="btn btn-primary btn-lg"  role="button"> Medicine List &raquo; </a></Link>
  </p>
</div>

    </div>
    


    </>
  )
}

export default Home