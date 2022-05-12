const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const publicDirectory = path.join(__dirname, '/public');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080
const app = express();
const db = require('./database/db');
const homePage = require('./routes/index');
const loginPage = require('./routes/login');
const welcomePage = require('./routes/welcome')

// set views for each route destination page
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// serve static files in public folder
app.use(express.static(publicDirectory))

// parse body information used for post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rouutes to different pages
app.use('/', homePage);
app.use('/', loginPage);
app.use('/', welcomePage); 

app.post('/login',(req,res)=>{
    var username = req.body.email;
    var userpassword = req.body.password;
    db.query("select * from loginadmin where user_email = ? and user_password = ?",[username, userpassword],(error, results,fields)=>{
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
})

app.listen(port,()=>{
    console.log('listening on port 8080')
})
