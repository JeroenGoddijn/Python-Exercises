let express = require('express');
let router = express.Router();

router.get('/contact', (request, response)=>{
    response.send('Contact Yo')
})

module.exports = router;