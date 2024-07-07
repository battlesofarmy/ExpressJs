// Basic use of Router 

const express = require('express');
const app = express();


const router = express.Router({
    // if you want to it caseSensitive
    caseSensitive: true
});

app.use(router);

router.get('/', (req, res)=>{
    res.send("Hello");
})

// Dont' make it router.listen()
app.listen(3000, ()=>{
    console.log("Server Running on port: 3000");
});