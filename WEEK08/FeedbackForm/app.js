 let express = require('express');
 let app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require('./routes/index'));


 app.listen(3000, () => {
     console.log('App listening on port 3000!');
 });