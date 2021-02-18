const express = require('express');
const cors = require('cors');
const body = require('body-parser');

const app = express();


// members routes
// const membersRoutes = require('./routes/api/members');

// tasks routes
const tasksRoutes = require('./routes/appRoutes'); //importing tasks routes


const PORT = process.env.PORT || 3000;


// use of cors   // aceptar peticiones desde otras maquinas
app.use( cors() );

// Body parser middleware
app.use( body.json() );      // support parsing receiving json data in body
app.use( body.urlencoded({ extended: false }) );  // support to get form data


// api routes
// api endpoints ( routes for the api ) 
// app.use( '/api/members' , membersRoutes );


tasksRoutes(app); //register the tasks routes


app.listen(PORT, ()  => {
    console.log( `Server Started on port ${PORT}`);
});

