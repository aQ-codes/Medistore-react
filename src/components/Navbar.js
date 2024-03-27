import logo from "../images/logo.png";
import React from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";

function Navbar() {
  var user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout() {
    if (user) {
      axios.post(
        "https://medicalstore.mashupstack.com/api/logout",
        {},
        {
          headers: { Authorization: "Bearer " + user.token },
        }
      );
      dispatch(removeUser());
      navigate("/login");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="navbar-brand">
        <img src={logo} height="40" width="80" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
       >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
      >
        <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
          <li className="nav-item">
            <NavLink
              to={"/"}
              className={
                "nav-link " + ((status) => (status.isActive ? "active" : ""))
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/medicines"}
              className={
                "nav-link " + ((status) => (status.isActive ? "active" : ""))
              }
            >
              Medicines
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/register"}
              className={
                "nav-link " + ((status) => (status.isActive ? "active" : ""))
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
          
          {user ? (
        
            <li className="nav-item">
              <a className="nav-link active">Logout</a>
            </li>
          ) : (
            
            <li className="nav-item">
              <NavLink
                to={"/login"}
                className={
                  "nav-link " + ((status) => (status.isActive ? "active" : ""))
                }
              >
                Login
              </NavLink>
            </li>
          )}
          
        </ul>
      
    </nav>
  );
}

export default Navbar;
