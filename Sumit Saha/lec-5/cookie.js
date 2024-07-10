const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.cookie('name', 'johfa');
    console.log('World');
    res.end();
})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});