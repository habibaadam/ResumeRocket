import React from 'react';
import '../allStyles//manual.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faQuestionCircle, faUserPlus,faFileAlt} from "@fortawesome/free-solid-svg-icons";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function Columlayout() {
  return (
    <div className="contain">
      <div className="row h-100">
        <h1 className="mt-5 text-center resume">How It Works</h1>
        <div
          className="col-md-3 d-flex" // Changed from col-md-4 to col-md-3
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="containers">
            <div className="icons">
              <FontAwesomeIcon icon={faPlay} />
              <h6 className="para">Click GetStarted </h6>
              <div className="info">
                <ul>
                <li>Click the GetStarted Button </li>
                <li> lt will lead you to registering page</li>
                <li>You will provide email details </li>
                  <li>And create a password </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 d-flex" // Changed from col-md-4 to col-md-3
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="containers">
            <div className="icons">
              <FontAwesomeIcon icon={faUserPlus} />
              <h6 className="para">Register Account </h6>
              <div className="info">
                <ul>
                  <li>After providing account details</li>
                  <li>Click on the register button</li>
                  <li>A succesfull registering prompt</li>
                  <li>Will pop & direct to next page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 d-flex" // Changed from col-md-4 to col-md-3
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="containers">
            <div className="icons">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <h6 className="para">Answer Questions</h6>
              <div className="info">
                <ul>
                  <li>The AI page will display your Name</li>
                  <li>And you will be asked various Questions </li>
                  <li>Including official Name & Qualifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 d-flex" // Changed from col-md-4 to col-md-3
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="containers">
            <div className="icons">
              <FontAwesomeIcon icon={faFileAlt} />
              <h6 className="para">Generate & Download </h6>
              <div className="info">
                <ul>
                  <li>After answering all questions to your liking</li>
                  <li>The AI will generate a Resume</li>
                  <li>And you will be able to</li>
                  <li>Download  & save your Resume</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}