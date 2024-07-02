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
        <h1 className="mt-5 mb-5 text-center resume">How It Works</h1>
        <div
          className="col-md-3 d-flex" // Changed from col-md-4 to col-md-3
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="containers">
            <div className="icons">
              <FontAwesomeIcon icon={faPlay} />
              <h6 className="para">To Get Started </h6>

              <hr />
              <div className="info">
                <ul>
                <li>Click on the GetStarted button which will lead you to a registering form for an easy and seamless sign up.</li>
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
              <h6 className="para">Register Account. </h6>
              <hr />
              <div className="info">
                <ul>
                  <li>Provide simple account details</li>
                  <li>Tap on the register button with a secure, unforgettable password. </li>
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
              <h6 className="para">Answer Q/A In Sentences.</h6>
              <hr />
              <div className="info">
                <ul>
                  <li>Questions relevant to resume generations are asked by our AI</li>
                  <li>Make sure to answer precisely in a conversational manner. </li>
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
              <h6 className="para">Generate & Download Cv. </h6>

              <hr />
              <div className="info">
                <ul>
                  <li>At the end of all questions, tap on the generate cv button and wait 2-3 mins max to have your cv downloaded automatically!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}