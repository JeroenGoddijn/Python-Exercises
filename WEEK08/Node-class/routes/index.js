let express = require('express');
let router = express.Router();
let data = require('../data/data.json');

router.get('/', (request, response)=>{
    // response.send('Yo Yo Yo')
    let myArray= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    response.render('index', {
        pageName: "This is the key of my object.",
        weekDays: MimeTypeArray,
        studentName: data.data
    })
})

module.exports = router;