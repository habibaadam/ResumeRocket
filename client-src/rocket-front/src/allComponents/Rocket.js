import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import '../allStyles/rocket.css';
import Logout from './Logout';
import PdfGenerator from './pdfGenerator';
import logo from '../images/resume_rocket.png';
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../app/ui/avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { ReactTyped } from "react-typed";


export default function Rocket() {
  // main page for questionnaire goes here
  const { firstName } = useParams();
  const { user } = useContext(UserContext);
  const [currentQindex, setcurrentQindex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [readyButton, setReadyButton] = useState(false);

  const questions = [
    'Can we start by giving me your official first name?',
    'And your official last name?',
    'Great! Which specific role in software engineering are you interested in?',
    'Kindly provide a short summary of what you can do and a company culture you prefer?',
    'Do you perhaps own a degree? If yes provide the name of the university, your major, and year of graduation, if No, type \'No, i do not own any degree yet\'',
    'If you answered with a no degree, what then has been your source of education and studies? It could be a training/bootcamp/self learning. Feel free to tell me!',
    'Enlighten me on your technology stack and specifiy how familiar you are with each of them. For eg \'My technology stack includes Python(Intermediate), Javascript(Expert) ...\'',
    'Are you familiar with version control systems(Git)?',
    'Have you worked with relational databases(MySQL) or non relational databases? If yes, list them',
    'Any familiarity with cloud platforms(GCP, Azure, AWS)?',
    'Explain or talk about some of your projects, experiences, or academic work. Do not forget to tell me the timeframes with each of them',
    'Sounds like you have been putting in the work! Do you own any kind of certifications? Tell me the names of the providers and year you got them. No pressure if you do not own any!',
    'List some of your soft or non technical skills please, then generate your cv :)'
  ];

  const handleAnswer = async () => {
    const textarea = document.getElementById('answer');
    const currentA = textarea.value + '.';

    // if an answer is not in sentences, send this message
    if (currentA.length < 20) {
      setErrorMessage('Invalid answer sent, please answer in sentences and reload the page');
      textarea.value = '';
      return;
    }
    setErrorMessage(null);

    // append current answer to the state variable
    setAnswer(previousA => [...previousA, currentA])

    // clear text area after user is done answering
    textarea.value = '';

    // when user clicks on button check, display next question
    if (currentQindex < questions.length - 1) {
      setcurrentQindex(currentQindex + 1);
    } else {
      const joinedA = answer.join(' '); // joins answers together
      console.log(joinedA);
      setReadyButton(true);
    }
  }


  return (
    <div className="container-fluid h-100">
      <div className="row h-100">

        {/* dividing screen page into two. First side takes 3 */}
        <div className="full-height col-md-3 bg-dark text-white">
          <Avatar>
            <AvatarImage className="user-spot d-flex mt-3"
              src="hh" />
            <AvatarFallback className="user-spot d-flex mt-4">{user.initials}</AvatarFallback>
          </Avatar>
          <h2 className="text-center mt-1">{user.email}</h2>
          <Logout />
        </div>

        {/* Second side which is the right side takes 9 */}
        <div className="full-height right col-md-9">
          {/* Navbar structure */}
          <nav className="navbar navbar-expand-lg mt-2" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="ahjsgjhdg">
                <img src={logo} height="40" alt="ResumeRocket Logo" loading="lazy" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="Namenavbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link resume " to="/">ResumeRocket</Link>
                  <div className="left-side-links resume">
                    <Link className="nav-link" to="/">About Us</Link>
                    <Link className="nav-link" to="../">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/*Content of right part of page */}
          <h1 className="text-center mt-4">Hello, <span className="resume">{firstName}</span></h1>
          <p className="text-center">Kindly answer these questions as accurate as you can in sentences! </p>

          <div className="container-fluid sexy-box bg-dark">
            <div className="d-flex">
              <Avatar>
                <AvatarImage src="hh" className="user-spot d-flex mt-3" />
                <AvatarFallback className="user-spot mt-4">RR</AvatarFallback>
              </Avatar>

              {errorMessage ? (
                <h2 className="questions">{errorMessage}</h2>
              )
                :
                (
                  <h2 className="questions" key={currentQindex}>
                    <ReactTyped strings={[questions[currentQindex]]} typeSpeed={20} showCursor={false} />
                  </h2>
                )
              }
            </div>

            {/* Text area for user input*/}
            <div className="input-group mt-5">
              <textarea rows="2" className="form-control" placeholder="Type your answer here..." aria-label="Type your answer here..." aria-describedby="button-addon2" id="answer" />
              <button className="btn btn-outline-secondary" onClick={handleAnswer} type="button" id="button-addon2">
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          </div>

          {/* Generate Cv Button after all questions are answered */}
          {readyButton && (<PdfGenerator />)}

        </div>
      </div>
    </div>
  );
}