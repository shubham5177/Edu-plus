
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    category: String,
    price: String,
    rating: Number,
    reviews: Number,
    icon: String,
    lessons: Array
});

module.exports = mongoose.model('Course', CourseSchema);
