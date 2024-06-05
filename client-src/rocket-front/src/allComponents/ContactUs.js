import '../allStyles//contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function ContactUs() {
  return (
    <div>
      <div className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <div className="github">
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div className="twitter">
        <FontAwesomeIcon icon={faTwitter} />

      </div>
    </div>
  )
}