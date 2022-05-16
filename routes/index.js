const express = require("express");
const db = require('../database/db');

const router = express.Router()

router.get('/',(req,res)=>{
    var sql = 'SELECT * FROM menu';
    db.query(sql ,(err, data, fields)=>{
    if(err) throw err;
    res.render('index',{userData:data});
    console.log(data)
    })
    
})

module.exports = router