import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Rocket from './Rocket';
import { UserProvider } from './UserContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/rocket/:firstName" element={<Rocket />} />
      </Routes>
    </Router>
    </UserProvider>
  </React.StrictMode>
);
reportWebVitals();
