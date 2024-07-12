const express = require('express');
const app = express();
const adminRouter = express.Router();



// const adminRouter = () => {
//     console.log()
// }

adminRouter.get('/johfa',()=>{
    console.log("I am johfa");
})


app.get('/', (req, res)=>{
    res.send('Hello');
    console.log('World');
})

app.use('fahim', adminRouter);


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});