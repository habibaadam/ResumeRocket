import axios from "axios";
import React  from "react";
import '../allStyles/pdfGenerator.css';
import { pdf } from '@react-pdf/renderer';
import PdfDocument from "./pdfStyle";
import fileDownload from 'js-file-download';


export default function PdfGenerator({ userPrompt }) {
  const handleGeneratePdf = async () => {
    console.log('handleGeneratePdf called');
    console.log('userPrompt:', userPrompt);
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error("User not found in localStorage");
      }

      const response = await axios.post("http://localhost:5000/generateCV", {
        user: userId,
        prompt: userPrompt,
      });
      console.log(response);

      const content = JSON.parse(response.data.content);
      const aiResponse = content.text;
      console.log('aiResponse:', aiResponse);

      //const forPdf = marked(aiResponse);

      const blob = await pdf(<PdfDocument content={aiResponse} />).toBlob();
      fileDownload(blob, 'yourcv.pdf');
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