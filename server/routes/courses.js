const express = require('express');
const router = express.Router();

// Example: Get all courses
router.get('/', async (req, res) => {
  res.json([
    { id: 1, title: "React Basics" },
    { id: 2, title: "Node.js Mastery" }
  ]);
});

// Example: Get course details
router.get('/:courseId', async (req, res) => {
  res.json({ id: req.params.courseId, title: "React Basics", description: "Learn React." });
});

module.exports = router;