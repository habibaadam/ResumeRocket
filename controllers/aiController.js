const OpenAI = require('openai');
const dotenv = require('dotenv');

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

exports.ai  = async (req, res) => {
    try {
    const prompt = req.body.prompt;
    const model = process.env.OPENAI_MODEL;
    const params = {
        messages: [
                { role: 'system', content: "Given your personal details, seniority, role applying for, education, experience, technologies you're familiar with, familiarity with Git, databases, cloud, and specialized technologies, projects, certifications, and soft skills, generate a comprehensive and well-formatted CV for a software engineering role. Include a summary that explains why you're applying for the job and your preferred working environment(under the summary)."},
                { role: 'user', content: prompt },
        ],
        model: model,
    };
    const chatCompletion = await openai.chat.completions.create(params);
    res.json(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}