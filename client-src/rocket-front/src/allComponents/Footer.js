import React from 'react';
import Wave from './Wave';
import '../allStyles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="wave-parent">
    <Wave />
  <div className="wave-content">
  <div className="icons-parent">

  <a
  className="links-style"
  href="https://www.linkedin.com/in/ote-561309263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} size="2x" className="res-icon"/>
  </a>

  <a
  className="links-style"
  href="https://github.com/habibaadam"
  target="_blank"
  rel= "noreferrer">
  <FontAwesomeIcon icon={faGithub} size="2x"  className="res-icon"/>
  </a>

  <a
  className="links-style"
  href="https://x.com/musiliyrn?t=XT1e4VGIyVqi2jhLn-ajrQ&s=08"
  target="_blank"
  rel= "noreferrer">
  <FontAwesomeIcon icon={faTwitter} size="2x"  className="res-icon"/>
  </a>

  <a
  className="links-style"
  href="mailto:memoemukoe@gmail.com"
  target="_blank"
  rel= "noreferrer">
  <FontAwesomeIcon icon={faEnvelope} size="2x"  className="res-icon"/>
  </a>

    </div>
  </div>
  </div>
)
export default Footer;