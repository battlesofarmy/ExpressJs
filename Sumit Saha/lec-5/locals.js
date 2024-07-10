const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    
    res.render('useVariables', {
        name : "Johfa Tahsin"
    });

    console.log("hi");
})



app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});