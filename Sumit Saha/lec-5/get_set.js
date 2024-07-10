// For output check Response Header

const express = require('express');
const app = express();



app.get('/', (req, res)=>{
    res.set("She", "johfa");
    console.log(res.get('She'));
    res.end();
})



app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});