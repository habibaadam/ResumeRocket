import React from 'react';
import '../allStyles//manual.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image4 from '../images/image4.jpg';


export default function Columlayout() {
  return (
    <div className="contain">
      <div className="row h-100">
        <h1 className="guide">Unleash Your Journey: A Visual Guide to Master Our Page</h1>
        <div className="col-md-4 h-100 bg-red-600 d-flex flex-column">
          <p>SIMPLY CLICK <br></br>  GET STARTED</p>
          <img className="image_classs" src={image1} alt="image1" />
          </div>
        <div className="col-md-4 h-100  bg-slate-600 d-flex flex-column">
          <p className="paragraph">REGISTER YOUR ACCOUNT<br></br> AND SET PASSWORD</p>
          <img className="image_classs" src={image2} alt="image2" />
          </div>
        <div className="col-md-4 h-100 bg-yellow-400 d-flex flex-column">
          <p className="paragraph"> ANSWER QUESTIONS  AND <br></br> GENERATE YOUR RESUME</p>
          <img className="image_classs" src={image4} alt="image4" />
          </div>
      </div>
    </div>
  );
}