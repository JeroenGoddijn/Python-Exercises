let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    // res.send("Welcome to our homepage")


    let id = req.params.id;

    let users = {
        fname: 'Jeroen',
        lname: 'Goddijn'
    }


    let imageURL = ['https://secure.img1-fg.wfcdn.com/im/53299221/compr-r85/4307/43074449/hanging-pug-puppy-statue.jpg', 'https://imgc.allpostersimages.com/img/Mounting/posters/mark-taylor-fawn-pug-puppy-8-weeks-and-guinea-pig_a-G-10577954-14258382.jpg', 'https://ichef.bbci.co.uk/news/660/cpsprodpb/CAB3/production/_105419815_fatpug2.jpg'];



    res.render('index', {
        title: "Working with EJS",
        pageID: "Home page",
        images: imageURL,
        users: us
    })
})

module.exports = router;