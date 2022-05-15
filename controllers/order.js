const db = require('../database/db');

exports.order = (req,res)=>{
    const{name,phone_number,email, prodName, prodPrice} = req.body;
    console.log(prodName)
}