
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    enrolledCourses: [Number],
    progress: {
        type: Map,
        of: [Number]
    },
    joinDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
