const express = require('express');
const app = express();

//Middleware
app.use(express.static('public')); //Access to public folder
app.use(express.urlencoded({extended: true}));
//Import route
const weatherRoute = require('./routes/weather');

//Use view engine ejs
app.set('view engine', 'ejs');


//Middleware route
app.use('/', weatherRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server starting at ${PORT}`);
});