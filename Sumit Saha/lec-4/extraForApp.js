// If you need app.something then what you will do ?

const expfm = (req, res)=> {
    // Will Return Undefine means app work
    res.send(req.app.get('view engine'));
    console.log(req.app.get('view engine'));
}


module.exports = expfm;