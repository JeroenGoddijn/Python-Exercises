let express = require('express');
let router = express.Router();
let testData = require('../data/test.json')
let bodyParser = require('body-parser');



router.get('/', (req, res)=>{
    console.log('inside of my route');
    res.render('index')
});

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/api', (req, res) =>{
    res.json(testData.test)
});

// whatever is defined after router.post is the ACTION the server is looking for
router.post('/api', (req,res) => {
    console.log(`testData: ${testData.test}`);
    console.log(`request Body: ${req.body}`);

    testData.test.unshift(req.body);
    console.log(`testData after: ${testData.test}`);

    res.send('inside of post route')
});
module.exports = router;