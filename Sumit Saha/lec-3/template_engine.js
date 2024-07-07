// npm i ejs
const express = require('express');
const app = express();

// Declare ejs
app.set('view engine', 'ejs');


// Use app.render
app.get('/',(req, res)=>{
    // by default, now it will be look for index.ejs into a views folder 
    // you can change the file possioin but can't change the root views folder
    res.render('index');
})






app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});