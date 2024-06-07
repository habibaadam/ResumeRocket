import React from 'react';
import '../allStyles/index.css';
import logo from '../images/resume_rocket.png';
import ColumLayout from './Columlayout';
import { Link } from "react-router-dom";
import ContactUs from './ContactUs';


export default function Landing() {
  return (
    <div>
    <div className="main-land">
 <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <Link className="navbar-brand" to="/">
      <img
        src={logo}
        height="40"
        alt="ResumeRocket Logo"
        loading="lazy"
      />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="Namenavbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav ml-auto d-flex justify-content-between">
        <Link className="nav-link resume " to="/">ResumeRocket</Link>
        <Link className="nav-link resume" to="/signup">SignUp</Link>
        <Link className="nav-link resume" to="/login">Log In</Link>
        <Link className="nav-link resume" to="../">Contact</Link>
    </div>
        </div>

      </div>
        <div>

  </div>
</nav>
         <h1 className="text-center">Welcome To <span className="resume">ResumeRocket</span></h1>
      <p className="text-center">An AI-powered resume builder specifically designed for individuals</p>
      <small className="text-center">seeking to venture into or are in the tech industry, particularly software engineering</small>
      <div className="for-link">
        <Link className=" mt-5 btn btn-secondary route-links" to="/signup">Get Started</Link>
      </div>
      <h3 className="text-center resume">How Does ResumeRocket Work?</h3>
      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </div>
    <ColumLayout/>
    <ContactUs />
    </div>
   );
}