const express = require('express');
const app = express();


app.get('/', (req, res)=>{

// Just End()
   // res.end();

// Json data 
   // res.json({
   //    name : "Johfa"
   // })

// just a status code
   //  res.status(400);
   //  res.end();

// Send status code with a response
// res.sendStatus(400);



})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});