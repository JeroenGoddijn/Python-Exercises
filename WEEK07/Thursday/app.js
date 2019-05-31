
let express = require('express');
let app = express();
let port = 3000;

// define website root folder
app.use(express.static('public'));

// // homepage
// app.get('/', (req, res)=>{
//     res.send('Hello MoFo!')
// });

// //about
// app.get('/about', (req, res)=>{
//     res.send('About us @DC')
// });

// //pictures
// app.get('/pictures?(album)', (req, res)=>{
//     res.send('pictures')
// });

// //menu
// app.get('/menu', (req, res)=>{
//     let bbq = req.param('bbq')
//     res.send(bbq)
// });

// //calculator
// app.get('/calculator', (req, res)=>{
//     let a = req.param('a');
//     let b = req.param('b');
//     let c = parseInt(a) + parseInt(b);
//     res.send(`the result of ${a} + ${b} is ${c}`)
// })

// //name
// app.get('/name/:fname', (req, res)=>{
//     let fn = req.params.fname;
//     res.send(`You're name is ${fn} `)
// })

// //calculate
// app.get('/calculate/:a/:b', (req, res)=>{
//     let a = parseInt(req.params.a);
//     let b = parseInt(req.params.b);
//     res.send(`the result of ${a} + ${b} is ${a+b}`)
// })

// app.get('/flights/:from-:to', (req,res)=>{
//     res.send(`Departing: ${req.params.from}, Arriving: ${req.params.to}`);
// })

// app.get('/something', (req,res)=>{
//     res.send(`${req.query.q}`);
// })


app.get('/photos', (req, res)=>{

    let images = req.query.images;

    res.send(`<img src="${images}" alt="">`);
})

app.listen(port, () =>{
    console.log(`listening on port: ${port}`)
})