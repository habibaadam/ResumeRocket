<<<<<<< HEAD

=======
>>>>>>> main
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './allComponents/Landing';
import SignUp from './allComponents/SignUp';
import LogIn from './allComponents/LogIn';
import Rocket from './allComponents/Rocket';
import Logout from './allComponents/Logout';
<<<<<<< HEAD
=======
import ContactUs from './allComponents/ContactUs'
>>>>>>> main
import PdfGenerator from './allComponents/pdfGenerator';
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
        <Route path="/logout" element={<Logout />} />
<<<<<<< HEAD
=======
        <Route path="/contact" element={<ContactUs />} />
>>>>>>> main
        <Route path="/pdf" element={<PdfGenerator />} />
      </Routes>
    </Router>
    </UserProvider>
  </React.StrictMode>
);
reportWebVitals();
<<<<<<< HEAD

=======
>>>>>>> main
