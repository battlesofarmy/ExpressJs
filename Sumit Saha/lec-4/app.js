
const express = require('express');
const app = express();
const getFmFahim = require('./extraForApp');



app.get('/', getFmFahim)


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});