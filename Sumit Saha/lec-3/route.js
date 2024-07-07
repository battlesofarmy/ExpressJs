const express = require('express');
const app = express();



// Normal Way
app.get('/about/mission',(req, res)=>{
    console.log("Hello World");
})
app.post('/about/mission',(req, res)=>{
    console.log("Hello World");
})
app.put('/about/mission',(req, res)=>{
    console.log("Hello World");
})

// Route Way
app.route('/about/mission')
    .get((req, res)=>{
        console.log("Hello World");
    })
    .post((req, res)=>{
        console.log("Hello World");
    })
    .put((req, res)=>{
        console.log("Hello World");
    });



app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});