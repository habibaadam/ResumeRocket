import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Corrected icon import for email
import '../allStyles/contact.css';
import BackgroundWave from './Backgroundwave';

export default function ContactUs() {
  return (
    <div className="contact">
      <div className="row h-100">
        <div className="col-md-3 h-100 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
          <div className="links">
            <a
              href="https://www.linkedin.com/in/ote-561309263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <br></br>
          </div>
        </div>
        <div className="col-md-3 h-100 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faGithub} className="icons" />
          <div className="links">
            <a
              href="https://github.com/habibaadam"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <br></br>
          </div>
        </div>
        <div className="col-md-3 h-100 d-flex justify-content-center align-items-center">
          <a href="https://x.com/musiliyrn?t=XT1e4VGIyVqi2jhLn-ajrQ&s=08"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icons" />
          </a>
        </div>
        <div className="col-md-3 h-100 d-flex justify-content-center align-items-center">
          <div className="links">
            <a
              href="mailto:memoemukoe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icons" />
            </a>
          </div>
        </div>
      </div>
      <BackgroundWave />
    </div>
  );
}