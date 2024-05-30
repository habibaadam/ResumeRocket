import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Alert, AlertDescription, AlertTitle } from "./app/ui/alert"
import { useNavigate, Link } from 'react-router-dom';
import { RocketIcon } from "@radix-ui/react-icons"
import { UserContext } from './UserContext';
import './forms.css';

export default function Login() {
  //setting the state of alert to false
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);


useEffect(() => {
  const timer = setTimeout(() => {
    setShowAlert(false);
  }, 3000); // Alert will disappear after 3 seconds
return () => clearTimeout(timer);
}, []);

const handleLogin = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:5000/login';
    const email = document.getElementById('form-email').value;
    const password = document.getElementById('form-pass').value;

    try {
      await axios.post(url, {
        email,
        password
      })
        .then((response) => {
          const user = response.data;
          localStorage.setItem('userId', user.id);
          console.log(localStorage.getItem('userId'));
          setUser(user);
          
         console.log(response.data);

        // TO-DO:  send an email to the user to confirm sign up
        // set the state of the alert to true
        setShowAlert(true);
        // move to the main ai page but delay 3 seconds
        setTimeout(() => {
          navigate(`/rocket/${user.first_name}`)
        }, 3000);
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
     <div className="form-page" onClick={() => setShowAlert(false)}>
       { // display alert
                showAlert && (<Alert
                  style={{
                  maxWidth: '200px',
                  margin: '0 auto',
                  color: 'silver',
                  backgroundColor: '#050915',
                  borderRadius: '10px',
                  position: 'absolute',
                  zIndex: 1,
                  left: '80%',
                  top: 0,
                 }}>
                  <RocketIcon className="h-3 w-3" />
                  <AlertTitle></AlertTitle>
                  <AlertDescription>
                  Logged In!
                  </AlertDescription>
                  </Alert>)
      }
      <section>
        <div>
          <div className="containing">
            <h2 className="text-uppercase resume text-center mt-0 mb-3">Login to your account</h2>
            <form onSubmit={handleLogin}>
              <div data-mdb-input-init className="form-outline mb-1 ">
                <input type="email" id="form-email" className="form-control form-control-lg" required/>
                <label className="form-label resume" htmlFor="form3Example3cg">Email</label>
              </div>

              <div data-mdb-input-init className="form-outline mb-1">
                <input type="password" id="form-pass" className="form-control form-control-lg" required/>
                <label className="form-label resume" htmlFor="form3Example4cg">Password</label>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="mt-3 btn btn-secondary route-links">Login</button>
              </div>

              <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="#!"
                  className="fw-bold text-body"><Link className="resume text-decoration-none" to="/signup">Register here</Link></a></p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}