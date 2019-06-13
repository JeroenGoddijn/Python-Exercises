let express = require('express');
let app = express();

let router = express.Router();

// views
app.set('view engine', 'ejs');
app.set('views', 'views');

//public folder
app.use(express.static('public'));

app.use('/', (req, res) =>{

    res.render('dishes');
})

// db.query('SELECT * FROM restaurants')
//     .then(function (results) {
//         results.forEach(function (r) {
//             console.log(r.id, r.name, r.category);
//         });
//     });

// db.query('SELECT * FROM restaurants INNER JOIN categories ON restaurants.category = categories.id')
//     .then(function (results) {
//     results.forEach(function (r) {
//         console.log(r.id, r.name, r.category);
//     });
// });

// db.result("INSERT INTO restaurants VALUES (default, 'Narf')")
//   .then((result) => {
//     console.log(result);
//   });

// THIS EXAMPLE ALLOWS SQL INJECTION
// let name = 'Big Belly Burger; DROP TABLE RESTAURANTS';
// let query = `INSERT INTO restaurants \
//     VALUES (DEFAULT, '${name}')`;
// db.result(query)
//     .then((result) => {
//         console.log(result);
//     })

// THIS EXAMPLE PREVENTS SQL INJECTION BY SANITIZING INPUTS
// let name = 'Big Belly Burger; DROP TABLE RESTAURANTS';
// let query = `INSERT INTO restaurants \
//     VALUES (DEFAULT, $1)`;
// db.result(query)
//     .then((result) => {
//         console.log(result);
//     })


let server = app.listen(3000, () => {
    console.log('App listening on port 3000!');
});


server.on('close', ()=>{
    pgp.end();
})