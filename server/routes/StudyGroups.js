const express = require('express');
const router = express.Router();

// Example: Get all study groups
router.get('/', async (req, res) => {
  // Fetch study groups from Firebase
  res.json([{ id: 1, name: 'React Learners' }, { id: 2, name: 'DSA Warriors' }]);
});

// Example: Create new study group
router.post('/', async (req, res) => {
  // Create group in Firebase
  res.status(201).json({ message: 'Study group created!' });
});

module.exports = router;