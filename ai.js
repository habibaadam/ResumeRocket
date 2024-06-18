global.fetch = require('node-fetch');
global.Headers = global.fetch.Headers;

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const dotenv = require('dotenv');
dotenv.config()
const apiKey = process.env.API_KEY;
console.log(apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "tunedModels/resumerocket-orj42hgepn80",
});

const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 0,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {

  const parts = [
    {text: "input: My official first name is John, my last name is Doe. I am a junior software engineer applying for a mid-level software engineering role. I have a BacIlor's degree in Computer Science from Stanford UniverIty. I am familiar with Git, MySQL, AWS, and Python. I have no certifications but has worked on a project wIre I developed a web application for a local buIness. I prefers a collaborative working environment."},
    {text: "output: "},
  ];

    try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });
    console.log(result.response.text());
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.error);