const express = require('express');
const app = express();

app.get('/',(req, res) => {
    console.log(req.method);
    res.send("Thanks")
})

app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});