const express = require('express');
const router = express.Router();

// Example: Register user
router.post('/register', (req, res) => {
  res.json({ message: 'User registered (example)' });
});

module.exports = router;
