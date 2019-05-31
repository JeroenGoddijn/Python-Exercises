let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to our homepage")
})

module.exports = router;