import React from 'react';
import '../allStyles//manual.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.png';
import image4 from '../images/image4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function Columlayout() {
  return (
    <div className="contain">
      <div className="row h-100">
       <h1 className="mt-5 text-center resume"> How It Works</h1>
        <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-duration="1000">
          <p className="instruct text-center mt-3 fs-6 ">Simply click on Get started</p>
          <img className="image_classs" src={image1} alt="image1" />
          </div>
        <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-duration="1000">
          <p className=" instruct text-center mt-3 fs-6 ">Register your account with your details</p>
          <img className="image_classs" src={image2} alt="image2" />
          </div>
        <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-duration="1000">
          <p className=" instruct text-center mt-3 fs-6"> Answer few questions and get your cv!</p>
          <img className="image_classs" src={image4} alt="image4" />
          </div>
      </div>
    </div>
  );
}