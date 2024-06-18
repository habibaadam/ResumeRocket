import axios from "axios";
import React  from "react";
import '../allStyles/pdfGenerator.css';
import { pdf } from '@react-pdf/renderer';
import PdfDocument from "./pdfStyle";
import fileDownload from 'js-file-download';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function PdfGenerator({ userPrompt, setIsLoading }) {
  const handleGeneratePdf = async () => {
    setIsLoading(true);
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error("User not found in localStorage");
      }

      const response = await axios.post("https://resumerocket.onrender.com/generateCV", {
        user: userId,
        prompt: userPrompt,
      });
      const aiResponse = JSON.parse(response.data.content);
      console.log('aiResponse:', aiResponse);
      setTimeout(() => setIsLoading(false), 2000);
      const blob = await pdf(<PdfDocument content={aiResponse} />).toBlob();
      fileDownload(blob, 'yourcv.pdf');
    } catch (error) {
      console.error(error);
    }
}
  return (
    <div className="final-button">
      <button className="btn btn-secondary fn mt-5" data-aos="fade-up" data-aos-duration="2000" onClick={handleGeneratePdf}>Generate CV</button>
    </div>
  );
}