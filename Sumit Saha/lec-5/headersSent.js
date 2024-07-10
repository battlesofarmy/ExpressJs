const express = require('express');
const app = express();
app.locals.title = "my matha";

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{

    // Will be false
    console.log(res.headersSent);
    
    res.render('useVariables', {
        name : "Johfa Tahsin"
    });

    // Will be true
    console.log(res.headersSent);
})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});