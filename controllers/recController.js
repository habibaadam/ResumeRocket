const Rec = require('../models/Rec');
const Cv = require('../models/cv');
const User = require('../models/User');

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
        const existingCv = await Cv.findOne({ cv });
        const existingUser = await User.findOne({ _id: existingCv.user }); 
        const savedRec = await newRec.save();
        return res.status(200).json({
            message: 'Sucessfully created Recommendations!',
            user: `${existingUser.firstName} ${existingUser.lastName}`,
            cv: existingCv.content,
            content: savedRec.content,
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getRec = async function getRec(req, res) {
    const rec = await Rec.findOne({ _id: req.params.id });
    if (!rec) {
        return res.status(404).json({ message: 'No content found' });
    }
    const cv = await Cv.findOne({ _id: rec.cv });
    const user = await User.findOne({ _id: cv.user });

    return res.status(200).json({
        message: 'Sucessfully fetched Recommendations!',
        user: `${user.firstName} ${user.lastName}`,
        cv: cv.content,
        content: rec.content,
    })
}