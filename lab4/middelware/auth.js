const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const {promisify}=require('util')
const User=require('../models/users')
const verify=promisify(jwt.verify)
const {SECRET}= process.env
console.log(SECRET)
const auth =async(req,res,next)=>
{
    const {authorization} = req.headers
    const user=await verify(authorization,SECRET).catch(e=> res.status(401).end())
    req.user=await User.findById(user.id)
    next()
}
module.exports=auth