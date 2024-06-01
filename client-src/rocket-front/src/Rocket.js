import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import './rocket.css';
import Logout from './Logout';
import logo from './images/resume_rocket.png';
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./app/ui/avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { ReactTyped } from "react-typed";


export default function Rocket() {
  // main page for questionnaire goes here
  const { firstName } = useParams();
  const { user } = useContext(UserContext);
  const [currentQindex, setcurrentQindex] = useState(0);
  const [answer, setAnswer] = useState([]);

  const questions = [
    'Can we start by giving me your official first name?',
    'And your official last name?',
    'Great! What role in software engineering are you interested in?',
    'Kindly provide a short summary of what you can do and a company culture you prefer?',
    'Do you perhaps own a degree? If yes provide the name of the university, your major, and year of graduation, if No, type \'No\''
  ];

  const handleAnswer = async () => {
    const textarea = document.getElementById('answer');
    const currentA = textarea.value + '.';
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
    }
  }


  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="full-height col-md-3 bg-dark text-white">
          <Avatar>
            <AvatarImage className="user-spot d-flex mt-3"
              src="hh" />
            <AvatarFallback className="user-spot d-flex mt-4">{user.initials}</AvatarFallback>
          </Avatar>
          <h2 className="text-center mt-1">{user.email}</h2>
          <Logout />
        </div>

        <div className="full-height right col-md-9">
          <nav className="navbar navbar-expand-lg mt-2" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="ahjsgjhdg">
                <img
                  src={logo}
                  height="40"
                  alt="ResumeRocket Logo"
                  loading="lazy"
                />
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
          <h1 className="text-center mt-4">Hello, <span className="resume">{firstName}</span></h1>
          <p className="text-center">Kindly answer these questions as accurate as you can in sentences! </p>

          <div className="sexy-box bg-dark">
            <div className="d-flex">
              <Avatar>
                <AvatarImage src="hh" className="user-spot d-flex mt-3" />
                <AvatarFallback className="user-spot mt-4">RR</AvatarFallback>
              </Avatar>
              <h2 className="questions" key={currentQindex}>
                <ReactTyped strings={[questions[currentQindex]]} typeSpeed={20} showCursor={false} />
              </h2>
            </div>

            <div className="input-group mt-5">
              <textarea rows="2" className="form-control" placeholder="Type your answer here..." aria-label="Type your answer here..." aria-describedby="button-addon2" id="answer" />
              <button className="btn btn-outline-secondary" onClick={handleAnswer} type="button" id="button-addon2">
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}