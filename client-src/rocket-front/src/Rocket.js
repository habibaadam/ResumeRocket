import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import './rocket.css';
import logo from './images/resume_rocket.png';
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./app/ui/avatar"

export default function Rocket() {
  // main page for questionnaire goes here
  const { firstName } = useParams();
  const { user } = useContext(UserContext);

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="full-height col-md-3 bg-dark text-white">
          <Avatar>
            <AvatarImage className="user-spot d-flex mt-3"
            src="hh"/>
            <AvatarFallback className="user-spot d-flex mt-4">{user.initials}</AvatarFallback>
          </Avatar>
          <h2 className="text-center mt-1">{user.email}</h2>
        </div>
        <div className="full-height right col-md-9">
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
        <div className="left-side-links resume">
        <Link className="nav-link" to="/">About Us</Link>
        <Link className="nav-link" to="../">Contact</Link>
        </div>
      </div>
</div>
  </div>
</nav>
      <h1 className="text-center mt-4">Hello, {firstName}</h1>
      <p className="text-center">Kindly answer these questions as accurate as you can! </p>
</div>
</div>
</div>
);
}