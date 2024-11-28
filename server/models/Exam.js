const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExamSchema = new Schema({
    lesson_id: {
        type: Schema.Types.ObjectId,
        ref: 'Lessons',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    exam_date: {
        type: Date,
        required: true
    },
    questions: [
        {
            question: {
                type: String,
                required: true
            },
            options: {
                type: [String],
                required: true
            },
            correct_answer: {
                type: String,
                required: true
            }
        }
    ],
    results: [
        {
            student_id: {
                type: Schema.Types.ObjectId,
                ref: 'Users',
                required: true
            },
            score: {
                type: Number,
                required: true
            }
        }
    ],
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Exam', ExamSchema);