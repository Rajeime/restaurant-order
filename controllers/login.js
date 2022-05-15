const db = require('../database/db');

exports.login = (req,res)=>{
    var username = req.body.email;
    var userpassword = req.body.password;
    db.query("select * from loginadmin where user_email = ? and BINARY user_password = ?",[username, userpassword],(error, results,fields)=>{
        if(results.length > 0){
            res.redirect('welcome')
            console.log(results.length)
            // res.send('horay!')
        }

        else{
            res.redirect('/')
        }
        res.end()
    })
}

