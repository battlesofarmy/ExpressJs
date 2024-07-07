const muntasir = (req, res)=>{
    res.send("Hello");
    console.log(req.app.locals.title);
}

module.exports = muntasir;