const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>Welcome to my website!</h1>")
});
router.get('/101', (req, res) => {
    res.send("<h1>About Page</h1>")
});

router.get('/102', (req, res) => {
    res.send("<h1>About Page</h1>")
});

module.exports = router;