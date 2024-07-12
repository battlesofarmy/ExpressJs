const express = require('express');
const app = express();
const adminRouter = express.Router();


const logger = (req, res, next) => {
    console.log("Today is friday");
    next();
}


adminRouter.use(logger);
// adminRouter.get('/', ()=>{
//     console.log("Today is friday");
//     res.end();
// })
adminRouter.get('/dashboard', (req, res) => {
    res.send("dashboard");
})

app.get('/', (req, res)=>{
    res.send('Hello');
    console.log('World ');
})


app.use('/admin', adminRouter);


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});