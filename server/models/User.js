const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['teacher', 'student', 'admin'],
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    banned: {
        type: Boolean,
        default: false
    },
    enrolled_classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }],//for students
    assigned_classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }]//for teachers
});

module.exports = mongoose.model('User', UserSchema);