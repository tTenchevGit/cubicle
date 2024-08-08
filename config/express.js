const handlebars = require('express-handlebars');
const express = require('express');

function setupExpress(app){
app.engine('hbs', handlebars.engine({ 
    extname: '.hbs',
    layoutsDir: 'views/layouts',
    
 })); 
app.set('view engine', 'hbs');

app.use(express.static('public'));
};

module.exports = setupExpress;