import React from 'react';
import '../allStyles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



export default function ContactUs() {
  return (
    <div className="contact">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
		<defs>
			<linearGradient id="bg">
				<stop offset="0%" style="stop-color:rgba(130, 158, 249, 0.06)"></stop>
				<stop offset="50%" style="stop-color:rgba(76, 190, 255, 0.6)"></stop>
				<stop offset="100%" style="stop-color:rgba(115, 209, 72, 0.2)"></stop>
			</linearGradient>
			<path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
		</defs>
		<g>
			<use xlink:href='#wave' opacity=".3">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="10s"
          calcMode="spline"
          values="270 230; -334 180; 270 230"
          keyTimes="0; .5; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlink:href='#wave' opacity=".6">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="8s"
          calcMode="spline"
          values="-270 230;243 220;-270 230"
          keyTimes="0; .6; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlink:href='#wave' opacty=".9">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="6s"
          calcMode="spline"
          values="0 230;-140 200;0 230"
          keyTimes="0; .4; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
		</g>
	</svg>
      <div className="row h-100">
        <div className="col-md-4 h-100 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
          <p2 className="links">
            <a href="https://www.linkedin.com/in/memory-mukonda-39ba06248" target="_blank" rel="noopener noreferrer">Memory Mukonda</a><br></br>
            <a href="https://www.linkedin.com/in/habiba-adam-salisu-570555267" target="_blank" rel="noopener noreferrer">Habiba Adam Salisu</a><br></br>
            <a href="https://www.linkedin.com/in/ote-561309263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"> Ian Ote</a><br></br>
            <a href="https://www.linkedin.com/in/mark-musili-a96977264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">Mark Musili</a>
          </p2>
        </div>
        <div className="col-md-4 h-100 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faGithub} className="icons" />
          <p3 className="links">
            <a href="https://github.com/mukoe2020" target="_blank" rel="noopener noreferrer">Memory Mukonda</a><br></br>
            <a href="https://github.com/habibaadam" target="_blank" rel="noopener noreferrer">Habiba Adam Salisu</a><br></br>
            <a href="https://github.com/OteIan" target="_blank" rel="noopener noreferrer">Ian Ote</a><br></br>
            <a href="https://github.com/MarkMusili" target="_blank" rel="noopener noreferrer">Mark Musili</a>
          </p3>
        </div>
        <div className="col-md-4 h-100 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faTwitter} className="icons" />
          <p2 className="links">
            <a href="https://x.com/memoryMukonda" target="_blank" rel="noopener noreferrer">Memory Mukonda</a><br></br>
            <a href="https://x.com/habibi_jk" target="_blank" rel="noopener noreferrer">Habiba Adam Salisu</a><br></br>
            <a href="https://x.com/Binare_code?t=8Y-HVx3aGiw4odlXVHp_0Q&s=08" target="_blank" rel="noopener noreferrer">Ian Ote</a><br></br>
            <a href="https://x.com/musiliyrn?t=XT1e4VGIyVqi2jhLn-ajrQ&s=08" target="_blank" rel="noopener noreferrer">Mark Musili</a>
          </p2>
        </div>
      </div>
      <div className="catchphrase">
        <p>Thank You For Using RESUMEROCKET</p>
      </div>
    </div>
  );
}