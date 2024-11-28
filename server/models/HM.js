const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    submission_date: { type: Date, required: true },
    file_url: { type: String }
});

const homeworkSchema = new Schema({
    lesson_id: { type: Schema.Types.ObjectId, ref: 'Lessons', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: Date, required: true },
    created_by: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    submissions: [submissionSchema],
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Homework', homeworkSchema);