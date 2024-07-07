// Way of Admin dashboard Access
const express = require('express');
const app = express();

const admin = express();

// It will return the 
admin.on('mount', function (parent) {
    console.log('Admin Mounted')
    console.log(parent) // refers to the parent app
})



admin.get('/dashboard', (req, res)=>{
    // Mountpath return the main path -- here main path is /admin
    console.log(admin.mountpath)
    res.end("Welcome to admin dashboard");
});

app.get('/', (req, res)=>{
    res.send("Welcome to app home");
})


app.use('/admin',admin);

app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
}); 