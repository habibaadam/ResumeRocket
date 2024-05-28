import React from 'react';
import axios from 'axios';
import './forms.css';
import './index.css';

export default function SignUp() {
 // prevent default submission behavior
  const handleRegister = async (event) => {
    event.preventDefault();
  // alert('User tapped on register');

    const url = 'http://localhost:5000/signup';
    const firstName = document.getElementById('form-first').value;
    const lastName = document.getElementById('form-last').value;
    const email = document.getElementById('form-email').value;
    const password = document.getElementById('form-pass').value;
    const rPassword = document.getElementById('form-rpassword').value;

    if (password !== rPassword) {
      // TO DO: turn this alert to modern day red signal on form
      alert('passwords do not match');
    }

    try {
      await axios.post(url, {
        firstName,
        lastName,
        email,
        password
      })
      .then((response) => {
        console.log(response.data);
        // TO-DO: Add some pop up or send an email to the user to confirm sign up
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
    <section>
          <div>
            <div className="containing">
              <h2 className="text-uppercase resume text-center mt-0 mb-3">Create an account</h2>
              <form onSubmit={handleRegister}>
                <div data-mdb-input-init className="form-outline mb-1">

                  <input type="text" id="form-first" className="form-control form-control-lg" required/>
                  <label className="form-label resume" htmlFor="form3Example1cg">First Name</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-1">

                  <input type="text" id="form-last" className="form-control form-control-lg" />
                  <label className="form-label resume" htmlFor="form3Example1cg">Last Name</label>

                </div>

                <div data-mdb-input-init className="form-outline mb-1 ">

                  <input type="email" id="form-email" className="form-control form-control-lg" />
                  <label className="form-label resume" htmlFor="form3Example3cg">Email</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-1">

                  <input type="password" id="form-pass" className="form-control form-control-lg" />
                  <label className="form-label resume" htmlFor="form3Example4cg">Password</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-1 ">
                  <input type="password" id="form-rpassword" className="form-control form-control-lg" />
                  <label className="form-label resume" htmlFor="hgjkh">Repeat your password</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="mt-5 btn btn-secondary route-links">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Already have an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p>
                </form>

            </div>
          </div>
</section>
</div>
  );
}