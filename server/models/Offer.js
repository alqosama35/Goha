const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OfferSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    validity: {
        type: Date,
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    target_student_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Offer', OfferSchema);