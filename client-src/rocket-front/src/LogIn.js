import React from 'react';
import axios from 'axios';
import './forms.css';
import './index.css';

export default function Login() {
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
        console.log(response.data);
        // TO-DO: Add some pop up or redirect to another page after successful login
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
                <button type="submit" className="mt-5 btn btn-secondary route-links">Login</button>
              </div>

              <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="#!"
                  className="fw-bold text-body"><u>Register here</u></a></p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}