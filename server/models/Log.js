const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema({
    action: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    performed_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    target_user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;