import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext, useRef } from 'react';
import { Alert, AlertDescription, AlertTitle } from "../app/ui/alert"
import { useNavigate, Link } from 'react-router-dom';
import { RocketIcon } from "@radix-ui/react-icons"
import { UserContext } from '../UserContext';
import { useForm } from 'react-hook-form';
import '../allStyles/forms.css';

export default function Login() {
  //setting the state of alert to false
  const [showAlert, setShowAlert] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
//eslint-disable-next-line
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


useEffect(() => {
  const timer = setTimeout(() => {
    setShowAlert(false);
  }, 3000); // Alert will disappear after 3 seconds
return () => clearTimeout(timer);
}, []);

const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const inputPassword = useRef({});
  inputPassword.current = watch("password", "");

const handleLogin = async () => {

    const url = 'https://resumerocket.onrender.com/login';
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
                  className="alert-style">
                  <RocketIcon className="h-3 w-3" />
                  <AlertTitle></AlertTitle>
                  <AlertDescription>
                  Logged In!
                  </AlertDescription>
                  </Alert>)
      }
      <section>
        <div>
          <div className="containing login">
            <h2 className="text-uppercase resume text-center mt-0 mb-3">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div data-mdb-input-init className="form-outline mb-1 ">
                <input  {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} type="email" id="form-email" className="form-control form-control-lg" placeholder="Email" required/>
                                  {errors.email && <p className="err">This field is required</p>}
              </div>

              <div data-mdb-input-init className="form-outline mb-1">
                <input
                {...register("password", { required: true, minLength: 8 })}
                type={showPassword ? "text" : "password"}
                id="form-pass"
                className="form-control form-control-lg"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                />
                {errors.password && <p className="err">Password must be at least 8 characters long</p>}
                <label className="form-label" >
                  <button
                      type='button'
                      className='form-button'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </label>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="mt-3 btn btn-secondary route-links">Login</button>
              </div>

              <p className="text-center forms mt-5 mb-0">Don't have an account?
               <Link className="form-button" to="/signup">Register here</Link></p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}