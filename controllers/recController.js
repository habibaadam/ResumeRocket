const Rec = require('../models/rec');

exports.createNewRec = async function createNewRec(req, res) {
    const { cv, content } = req.body;
    if (!cv) {
        return res.status(404).json({ message: 'No cv found' });
    }
    if (!content) {
        return res.status(404).json({ message: 'No Content found' });
    }

    try {
        const newRec = new Rec({
            cv,
            content,
        });
        const savedRec = await newRec.save();
        return res.status(200).json({
            message: 'Sucessfully created Recommendations!',
            cv: savedRec.cv,
            content: savedRec.content,
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}