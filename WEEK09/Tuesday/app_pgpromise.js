let express = require('express');
let app = express();

const promise = require('bluebird');

// pg-promise initialization options:
const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise,
};

// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurants_db',
    user: 'postgres'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);
// Create the database instance:
const db = pgp(config);

db.query('SELECT * FROM restaurants')
    .then(function (results) {
        results.forEach(function (r) {
            console.log(r.id, r.name, r.category);
        });
    });

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
let name = 'Big Belly Burger; DROP TABLE RESTAURANTS';
let query = `INSERT INTO restaurants \
    VALUES (DEFAULT, $1)`;
db.result(query)
    .then((result) => {
        console.log(result);
    })


let server = app.listen(3000, () => {
    console.log('App listening on port 3000!');
});


server.on('close', ()=>{
    pgp.end();
})