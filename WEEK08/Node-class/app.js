let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = 3006;




// Public
app.use(express.static('public'));

// EJS templates
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/chat'));

io.on('connection', (socket) => {
    socket.on('chat message', (msg)=>{
        io.emit('chat message', msg)
    })
})

http.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});