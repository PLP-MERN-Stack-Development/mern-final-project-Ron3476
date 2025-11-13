const express = require('express');
const router = express.Router();

// Example: Get posts
router.get('/', (req, res) => {
  res.json({ message: 'Posts retrieved (example)' });
});

module.exports = router;
