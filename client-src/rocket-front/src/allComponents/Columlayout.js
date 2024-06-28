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
            <div className="content">
              <FontAwesomeIcon icon={faPlay} />
              <h6 className="para">Click  the GetStarted Button</h6>
              <p className="info"> The GetStarted Button<br></br>
                will lead you to  registering page<br></br>
                you will provide email details <br></br>
                and create a password <br></br>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 d-flex" // Changed from col-md-4 to col-md-3
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="containers">
            <div className="content">
              <FontAwesomeIcon icon={faUserPlus} />
              <h6 className="para">Register account with email </h6>
              <p className="info">After  providing account details<br></br>
                click on the register button<br></br>
                a succesfull registering prompt<br></br>
                will pop & direct to next page<br></br>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 d-flex" // Changed from col-md-4 to col-md-3
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="containers">
            <div className="content">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <h6 className="para">Answer and provide your details </h6>
              <p className="info">the AI page will display your <br></br>
                Name and you will asked various<br></br>
                questions including official<br></br>
                name and qualifications<br></br>

              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 d-flex" // Changed from col-md-4 to col-md-3
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="containers">
            <div className="content">
              <FontAwesomeIcon icon={faFileAlt} />
              <h6 className="para">Generate and download your CV</h6>
              <p className="info">After answering all questions<br></br>
                the AI will generate a CV<br></br>
                and you will be able to<br></br>
                download it<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}