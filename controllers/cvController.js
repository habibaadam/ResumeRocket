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


exports.generatePDF = async function generatePDF(req, res) {
    try {
        const { content } = req.body;

        const pdfDoc = await PDFDocument.create();
        let page = pdfDoc.addPage([595.28, 841.89]);

        const lines = content.split('\n');
        let y = 800; // start from the top of the page
        const x = 50; // start from the left of the page
        const fontSize = 14;
        const lineHeight = fontSize * 1.5; // space between lines
        const pageWidth = 595.28;

        for (const line of lines) {
            const words = line.split(' ');
            let lineText = '';

            for (const word of words) {
                const nextLine = lineText + word + ' ';
                const nextLineWidth = fontSize * nextLine.length; // approximate width of the next line

                if (nextLineWidth > pageWidth - 2 * x) {
                    // if the next line is too long, draw the current line and start a new one
                    page.drawText(lineText, { x, y, size: fontSize, color: rgb(0, 0, 0) });
                    lineText = word + ' ';
                    y -= lineHeight;

                    if (y < 0) {
                        // if there's no more space on the page, add a new page
                        page = pdfDoc.addPage([595.28, 841.89]);
                        y = 800;
                    }
                } else {
                    // if the next line fits, add the word to the current line
                    lineText = nextLine;
                }
            }

            // draw the last line of text
            page.drawText(lineText, { x, y, size: fontSize, color: rgb(0, 0, 0) });
            y -= lineHeight;

            if (y < 0) {
                // if there's no more space on the page, add a new page
                page = pdfDoc.addPage([595.28, 841.89]);
                y = 800;
            }
        }

        const pdfBytes = await pdfDoc.save();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');

        res.send(Buffer.from(pdfBytes));
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}