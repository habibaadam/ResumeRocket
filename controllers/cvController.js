const CV = require('../models/cv');
const User = require('../models/User');
const { PDFDocument, rgb } = require('pdf-lib');

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

exports.generatePDF = async function generatePDF(req, res) {
    try {
        const { content } = req.body;

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);

        page.drawText(content, {
            x: 50,
            y: 350,
            size: 14,
            color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');

        res.send(Buffer.from(pdfBytes));
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}