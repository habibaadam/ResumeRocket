const mongoose = require('mongoose');

const { Schema } = mongoose;

const cvSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please add a User Id']
    },
    content: {
        type: String,
        required: [true, 'Please add content'],
        trim: true
    }
}, { timestamps: true });

const Cv = mongoose.model('Cv', cvSchema);

module.exports = Cv;
