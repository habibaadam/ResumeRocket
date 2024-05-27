const { json } = require('express');
const CV = require('../models/cv');
const User = require('../models/User');
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
        const existingUser = await User.findOne({ user });

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
        const aiResponse = await fetch('http://localhost:5000/ai', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ prompt }),
        });
        if (!aiResponse.ok) {
            throw new Error(`Error fetching content from AI: ${await aiResponse.text()}`);
        }
      
        const aiContent = await aiResponse.json();
    
        const createCvResponse = await fetch('http://localhost:5000/newCV', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ user: user, content: JSON.stringify(aiContent) }),
        });
        if (!createCvResponse.ok) {
            throw new Error(`Error creating cv: ${await createCvResponse.text()}`);
        }

        const finalResponse = await createCvResponse.json();
    
        return res.status(200).json(finalResponse);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
