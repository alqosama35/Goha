const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    schedule: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Class', classSchema);