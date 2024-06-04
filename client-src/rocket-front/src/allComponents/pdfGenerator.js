import axios from "axios";
import React from "react";
import '../allStyles/pdfGenerator.css';

export default function PdfGenerator({ userPrompt }) {
  const handleGeneratePdf = async () => {
    console.log('handleGeneratePdf called');
    console.log('userPrompt:', userPrompt);
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error("User not found in localStorage");
      }

      const aiResponse = await axios.post("http://localhost:5000/generateCV", {
        user: userId,
        prompt: userPrompt,
      });
      console.log('aiResponse:', aiResponse);

      const response = await axios.post("http://localhost:5000/generatePDF", {
        content: aiResponse.data.content,
      }, {
        responseType: 'blob',
      });
      console.log('response.data:', response.data);
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const downloadUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'CV.pdf'; // name of the downloaded file
      link.click();

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