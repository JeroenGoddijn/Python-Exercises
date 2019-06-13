let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let data = require('../data/data.json');

router.get('/about', (request, response)=>{
    // response.send('About Yo')
    response.render('about', {

    })
})

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/about', (request, response) => {
    
    console.log(data.data);
    data.data.unshift(request.body);
    console.log(data.data);
    
    response.json(data)
})

router.get('/api', (request, response) => {
    
    response.json(data.data)


})

module.exports = router;