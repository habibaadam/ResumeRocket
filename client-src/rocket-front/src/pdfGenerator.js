import axios from "axios";
import React from "react";
import './pdfGenerator.css';

export default function PdfGenerator() {
  const handleGeneratePdf = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generatePDF", {
        content: "**Name:** Hela Forde\n\n**Role applying for:** Junior Software Engineer (Front End Development)\n\n**Summary:** \nA junior software engineer with a focus on front end development, I bring 3 years of experience in creating user-friendly and responsive websites using React and Angular. I am a quick learner and a team player, and I am always ready to leverage my skills to contribute to the success of my team. I hold a Bachelor's degree in Computer Science from Yorkshire University in England and am proficient in React-Js (Intermediate), JavaScript (Intermediate), Angular (Basics), and React-Native (Basics). I am also familiar with Git and am always ready to expand my knowledge to other technologies and frameworks as needed.\n\n**Education:**\n- Bachelor's degree in Computer Science, Yorkshire University, England\n\n**Experience:**\n- Junior Software Engineer, Gaga Ent (July 2019 - Present)\n    - Developed and maintained the front end of e-commerce fashion websites using React.\n    - Improved the user-friendliness and responsiveness of the existing website on mobile devices.\n\n**Technologies and Frameworks:**\n- React-Js (Intermediate)\n- JavaScript (Intermediate)\n- Angular (Basics)\n- React-Native (Basics)\n\n**Soft Skills:**\n- Quick learner\n- Team player\n- Research",
        // content: "Hello World!!!"
      }, {
        responseType: 'blob',
      });
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const downloadUrl = URL.createObjectURL(pdfBlob);
      window.open(downloadUrl);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="final-button">
      <button className="btn btn-secondary fn mt-5" onClick={handleGeneratePdf}>Generate CV</button>
    </div>
  );
}