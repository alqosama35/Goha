const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
    class_id: {
        type: Schema.Types.ObjectId,
        ref: 'Classes',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    present_students: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
});

module.exports = mongoose.model('Attendance', AttendanceSchema);