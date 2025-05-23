
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/enroll', async (req, res) => {
    const { userId, courseId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user.enrolledCourses.includes(courseId)) {
            user.enrolledCourses.push(courseId);
            await user.save();
        }
        res.json(user.enrolledCourses);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
