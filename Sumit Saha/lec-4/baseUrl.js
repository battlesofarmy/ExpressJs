// Get the Base Url

const express = require('express');
const app = express();
const adminRouter = express();

adminRouter.get('/dashboard',(req, res)=>{
    // It will return "/admin" as a baseUrl
    res.send(req.baseUrl);
    console.log(req.baseUrl)
})

app.get('/',(req, res)=>{
    res.send("hi");
    // It will return a black
    console.log(req.baseUrl);
})
app.use('/admin', adminRouter);


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});