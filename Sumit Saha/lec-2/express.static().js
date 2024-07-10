
// Make a folder Abaiable for user access

const express = require('express');
const app = express();

// For Normal access use this --- localhost:3000/love.txt
app.use(express.static(__dirname + '/public/'))

// For root index.html replace and access by any name --- localhost:3000/(noTextNeed)
app.use(express.static(__dirname + '/public/',{
    index : 'love.txt'
}));



app.get('/', (req, res)=>{
    res.send("Hello");

    // BCZ it's return buffer
    console.log("Hello World");
})

app.listen(3000, ()=>{
    console.log("Server Running on port: 3000");
});