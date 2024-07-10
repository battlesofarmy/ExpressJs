// Get the  Hostname

const express = require('express');
const app = express();
const adminRouter = express();

adminRouter.get('/dashboard',(req, res)=>{
    console.log(req.hostname);
    res.send("Thanks");
})

app.use('/admin', adminRouter);

app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});