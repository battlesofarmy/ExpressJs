const express = require('express');
const app = express();

app.get('/test', (req, res)=>{
    res.send("This is a test Condition");
})


app.get('/', (req, res)=>{
    res.redirect('/test');
    res.end();
})



app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});