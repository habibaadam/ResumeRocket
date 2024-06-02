import React from 'react';
import './manual.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';


export default function Columlayout() {
  return (
    <div className="contain">
      <h1 className="guide">Unleash Your Journey: A Visual Guide to Master Our Page</h1>
      <div className="row h-100">
        <div className="col-md-3 h-100 bg-red-600 d-flex flex-column">
          <img className="image_classs" src={image1} alt="image1" />
          <p className="paragraph">Simply click on get started</p>
        </div>
        <div className="col-md-3 h-100 bg-red-600 d-flex flex-column">
          <img className="image_classs" src={image2} alt="image2" />
          <p className="paragraph">Follow the prompts to register</p>
        </div>
        <div className="col-md-3 h-100 bg-red-600 d-flex flex-column">
          <img className="image_classs" src={image3} alt="image3" />
          <p className="paragraph"> create your Resume</p>
        </div>
        <div className="col-md-3 h-100 bg-red-600 d-flex flex-column">
          <img className="image_classs" src={image1} alt="image4" />
          <p className="paragraph">Download your resume🤩</p>
        </div>
      </div>
    </div>
  );
}