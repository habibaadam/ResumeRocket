import React from 'react';
import './index.css';
import logo from './images/resume_rocket.png';
import { Link } from "react-router-dom";


export default function Landing() {
  return (
    <div className="main-land">
      <nav className="navbar navbar-expand-lg mt-2" data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="ahjsgjhdg">
      <img
        src={logo}
        height="40"
        alt="ResumeRocket Logo"
        loading="lazy"
      />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="Namenavbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link resume " to="/">ResumeRocket</Link>
        <Link className="nav-link left resume" to="/signup">SignUp</Link>
        <Link className="nav-link left-2 resume" to="/login">Log In</Link>
        <Link className="nav-link left-3 resume" to="../">Contact</Link>
      </div>
</div>
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
      );
}