let express = require('express');
let router = express.Router();

let db = require('../db/database.js');

let bodyParser = require('body-parser');

//display list of dishes
router.get('/dishes', (req, res)=>{

    db.query('SELECT * FROM restaurants')
    .then((results) => {
        //results is array of ojbects
        res.render('dishes', {
            dishes: results
        })
    })

    .catch((res) => {
        res.send('error')
    })
})
router.use(bodyParser.urlencoded({extended: false}));

router.post('/dishes', (req, res) => {
    // insert record into database
    let title = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let imgURL = req.body.imgURL;

    db.none('INSERT INTO dishes(name, category, description, price, course, imgURL) VALUES ($1, $2, $3, $4, $5, $6',
    [title, 1, description, price, "", imgURL])

    res.render('dishes', {
        dishes: results
    })
})

router.get('/newdish', (req, res)=>{
    res.render('newdish')
})

module.exports = router;