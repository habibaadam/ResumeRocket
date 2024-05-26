const mongoose = require('mongoose');

const { Schema } = mongoose;

const recSchema = new Schema({
    cv: {
        type: Schema.Types.ObjectId,
        ref: 'Rec',
        required: [true, 'Please add a CV Id']
    },
    content: {
        type: String,
        required: [true, 'Please add content'],
        trim: true
    }
}, { timestamps: true });

const Rec = mongoose.model('Rec', recSchema);

module.exports = Rec;
