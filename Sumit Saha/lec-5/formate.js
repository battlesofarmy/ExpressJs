const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{

    res.format({
        'text/plain': () =>{
            res.send('I am text palin');
        }, 
        'text/html' : () => {
            res.render('useVariables', {
                name : "Johfa Tahsin"
            });
        }, 
        'application/json' : () => {
            res.json({
                message: 'Fahim'
            })
        },
        default: () => {
            res.status(406).send("Not Acceptable");
        }
    })

})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});