// 1. Locals
const express = require('express');
const app = express();
const handle = require('./extra');

// 1. Locals
app.locals.title = "My Express App";
// Access it in main file
console.log(app.locals.title);
// Access it from a different file
// console.log(req.app.locals.title);


app.get('/', handle);



app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});