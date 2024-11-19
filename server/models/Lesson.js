const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    class_id: {
        type: Schema.Types.ObjectId,
        ref: 'Classes',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },//for teacher
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Lesson', LessonSchema);