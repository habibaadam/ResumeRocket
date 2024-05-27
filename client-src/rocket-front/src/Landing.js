import React from 'react';
import './index.css';
import logo from './images/resume_rocket.png';

export default function Landing() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
        <a class="navbar-brand" href="ahjsgjhdg">
      <img
        src={logo}
        height="35"
        alt="ResumeRocket Logo"
        loading="lazy"
      />
    </a>
    <button clNameass="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="Namenavbar-toggler-icon"></span>
    </button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " href="../">ResumeRocket</a>
        <a className="nav-link left" href="../">SignUp</a>
        <a className="nav-link left-2" href="../">Log In</a>
        <a className="nav-link left-3" href="../">Contact</a>
        </div>
</div>
  </div>
</nav>
          <h1 className="text-center">Welcome To <span className="resume">ResumeRocket</span></h1>
          <p className="text-center">An AI-powered resume builder specifically designed for individuals</p>
          <small className="text-center">seeking to venture into or are in the tech industry, particularly software engineering</small>
          <button type="button" className="mt-5 btn btn-secondary">Get Started</button>
      </div>
      );
}