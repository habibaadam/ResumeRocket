
import React from 'react';
import '../allStyles/index.css';
import Columlayout from './Columlayout';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Rocketship from '../app/ui/icon';



export default function Landing() {
  return (
    <div>
      <div className="main-land">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between" data-bs-theme="dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse landing" id="navbarSupportedContent">
              <Link className="nav-link resume active" to="/">RESUMEROCKET</Link>
              <Link className="nav-link-left " to="/login">LOG IN</Link>
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </div>

          </div>
        </nav>
        <div className="row h-100">
          <div className="col-md-8">
            <h1 className="mb-2">Build Resumes Quickly And Effortlessly.</h1>
            <h2>With Our AI<span className="resume">ResumeRocket</span></h2>
            <p className="mt-2"> Designed for individuals seeking to venture into or are in the tech industry(software engineering)</p>
            <div className="for-link">
              <Link className=" mt-3 btn btn-secondary route-links" to="/signup">Get Started</Link>
              <Link className=" mt-3 btn btn-secondary route-links" to="/colum">How It Works</Link>
            </div>
          </div>

          <div className="col-md-4">
            <Rocketship />
          </div>
        </div>
      </div>
      <Columlayout />
      <Footer />
    </div>
  );
}