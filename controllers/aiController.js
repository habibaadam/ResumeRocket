const fetch = require('node-fetch');

global.fetch = fetch;
global.Headers = fetch.Headers;
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

exports.ai = async (req, res) => {
  try {
    dotenv.config();
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const generationConfig = {
      temperature: 0.5,
      top_p: 1,
      top_k: 0,
      max_output_tokens: 10000,
    };

    //Temporarily using the gemini model on its own
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro', generationConfig });
    const { prompt } = req.body;
    const headers = {
      'Content-Type': 'application/json',
    };
    const result = await model.generateContent(prompt, { headers });
    const response = await result.response;
    const text = response.text();
    // Here you can do whatever you want with the text
    res.status(200).json({ text });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
