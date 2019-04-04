const express = require('express');
const exphbs  = require('express-handlebars');
const burger = require(`./models/burger`);
const burgers_controllers = require(`./controllers/burgers_controller`);

const app = express();

const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(`/static`, express.static('public'));
app.use(`/api`, burgers_controllers);

app.get('/', function (req, res) {
    res.render('index');
});

console.log(`listening on PORT ${PORT}`);
app.listen(PORT);