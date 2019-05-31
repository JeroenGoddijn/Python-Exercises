let express = require('express');

let router = express.Router();

router.get('/about', (req, res) => {
    res.send("Welcome to About Us")
})

module.exports = router;