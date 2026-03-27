const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const cancelHelper = require('./helpers/index');
const router = require('./routes/route');


const app = express();

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    helpers: cancelHelper
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);


app.use((error,req,res,next) =>{
    console.error(error);
    res.status(500).send(`Server Error: ${error.message}`);
})
module.exports = app;