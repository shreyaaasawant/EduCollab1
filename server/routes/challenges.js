const express = require('express');
const router = express.Router();

// Example: Get all challenges
router.get('/', async (req, res) => {
  res.json([
    { id: 1, title: "30 Days of JavaScript" },
    { id: 2, title: "React UI Challenge" }
  ]);
});

// Example: Participate in challenge
router.post('/:challengeId/participate', async (req, res) => {
  // Mark user as participating in challenge in Firebase
  res.json({ message: "You have participated in this challenge!" });
});

module.exports = router;