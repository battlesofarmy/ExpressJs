const express = require('express');
const app = express();

const middleWare1 = (req, res, next) => {
    console.log("I am 1")
    next();
}

const middleWare2 = (req, res, next) => {
    console.log("I am 2")
    next();
}

app.use(middleWare1)
app.use(middleWare2)

app.get('/', (req, res)=>{
    res.send('Hello');
    console.log('World');
})



app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});