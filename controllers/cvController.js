const { json } = require('express');
const axios = require('axios');
const CV = require('../models/cv');
const User = require('../models/User');
const { PDFDocument, rgb } = require('pdf-lib');
const { ai } = require('./aiController');

exports.createNewCv = async function createNewCv(req, res) {
    const { user, content } = req.body;
    if (!user) {
        return res.status(404).json({ message: 'No user found' });
    }
    if (!content) {
        return res.status(404).json({ message: 'No cv found' });
    }

    try {
        const newCv = new CV({
            user,
            content,
        });
        const existingUser = await User.findOne({ _id: user });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }
        const savedCv = await newCv.save();
        return res.status(200).json({
            message: 'Sucessfully created cv!',
            user: `${existingUser.firstName} ${existingUser.lastName}`,
            content: savedCv.content,
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getCv = async function getCv(req, res) {
    const cv = await CV.findOne({ _id: req.params.id });
    if (!cv) {
        return res.status(404).json({ message: 'No cv found' });
    }
    const user = await User.findOne({ _id: cv.user });

    return res.status(200).json({
        message: 'Sucessfully fetched cv!',
        user: `${user.firstName} ${user.lastName}`,
        content: cv.content,
    })
}

exports.generateCv = async function generateCv(req, res) {
    try {
        const { user, prompt } = req.body;
        const aiResponse = await axios.post('http://localhost:5000/ai', {
            prompt: JSON.stringify(prompt)
        });

        if (aiResponse.status !== 200) {
            throw new Error(`Error fetching content from AI: ${aiResponse.data}`);
        }

        const aiContent = aiResponse.data;
        const createCvResponse = await axios.post('http://localhost:5000/newCV', {
            user: user,
            content: JSON.stringify(aiContent)
        }, {
            headers: {'Content-Type': 'application/json'}
        });

        if (createCvResponse.status !== 200) {
            throw new Error(`Error creating CV: ${createCvResponse.data}`)
        }
        console.log(createCvResponse.data);

        return res.status(200).json(createCvResponse.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
