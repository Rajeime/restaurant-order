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
const welcomePage = require('./routes/welcome');
const authentication = require('./routes/auth');

// set views for each route destination page
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// serve static files in public folder
app.use(express.static(publicDirectory));

// parse body information used for post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes to different pages for get requests
app.use('/', homePage);
app.use('/', loginPage);
app.use('/', welcomePage); 

// post requests 
app.use('/auth', authentication);

// app.post('/signUp',(req,res)=>{
//     const {username, email, password,confirmPassword,date} = req.body;
//    db.query('INSERT INTO loginadmin SET ?' ,{user_email : email, user_password : password},(error, results)=>{
//     if(error){
//         console.log(error)
//     }
//     else{console.log(results)
//         return res.render('signUp')}
//    })
// })

app.listen(port,()=>{
    console.log('listening on port 8080')
})
