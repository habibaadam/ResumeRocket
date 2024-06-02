import axios from "axios";
import React from "react";
import './pdfGenerator.css';

export default function PdfGenerator() {
  const handleGeneratePdf = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error("User not found in localStorage");
      }
    
      const aiResponse = await axios.post("http://localhost:5000/generateCV", {
        user: userId,
        prompt: "user peompt",
      });

      const response = await axios.post("http://localhost:5000/generatePDF", {
        content: aiResponse.data.content,
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