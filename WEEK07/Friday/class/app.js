let express = require('express');

let app = express();


// app.use( (req, res, next) => {
    
//     // res.status(503).send('This page is currently not available')
//     console.log('I\'m inside my middleware');
//     next();
// });

// Headers

app.use(express.static('public'));
app.use( (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});

// Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/about.js'));

// Views
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3001, () => {
    console.log('App listening on port 3001!');
});