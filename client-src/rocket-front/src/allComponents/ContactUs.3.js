import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



export default function ContactUs() {
  return (
    <div className="contact">
      <div className="row h-100">
        <div className="col-md-4 h-100 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
          <h2 className="links">
            <a href="https://www.linkedin.com/in/memory-mukonda-39ba06248" target="_blank" rel="noopener noreferrer">Memory Mukonda</a><br></br>
            <a href="https://www.linkedin.com/in/habiba-adam-salisu-570555267" target="_blank" rel="noopener noreferrer">Habiba Adam Salisu</a><br></br>
            <a href="https://www.linkedin.com/in/ote-561309263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"> Ian Ote</a><br></br>
            <a href="https://www.linkedin.com/in/mark-musili-a96977264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">Mark Musili</a>
          </h2>
        </div>
        <div className="col-md-4 h-100 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
          <FontAwesomeIcon icon={faGithub} className="icons" />
          <h3 className="links">
            <a href="https://github.com/mukoe2020" target="_blank" rel="noopener noreferrer">Memory Mukonda</a><br></br>
            <a href="https://github.com/habibaadam" target="_blank" rel="noopener noreferrer">Habiba Adam Salisu</a><br></br>
            <a href="https://github.com/OteIan" target="_blank" rel="noopener noreferrer">Ian Ote</a><br></br>
            <a href="https://github.com/MarkMusili" target="_blank" rel="noopener noreferrer">Mark Musili</a>
          </h3>
        </div>
        <div className="col-md-4 h-100 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
          <FontAwesomeIcon icon={faTwitter} className="icons" />
          <h2 className="links">
            <a href="https://x.com/memoryMukonda" target="_blank" rel="noopener noreferrer">Memory Mukonda</a><br></br>
            <a href="https://x.com/habibi_jk" target="_blank" rel="noopener noreferrer">Habiba Adam Salisu</a><br></br>
            <a href="https://x.com/Binare_code?t=8Y-HVx3aGiw4odlXVHp_0Q&s=08" target="_blank" rel="noopener noreferrer">Ian Ote</a><br></br>
            <a href="https://x.com/musiliyrn?t=XT1e4VGIyVqi2jhLn-ajrQ&s=08" target="_blank" rel="noopener noreferrer">Mark Musili</a>
          </h2>
        </div>
      </div>
      <div className="catchphrase">
        <p>THANK YOU FOR USING RESUMEROCKET</p>
      </div>
    </div>
  );
}
