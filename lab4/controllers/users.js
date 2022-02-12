const fs=require('fs')
const { title } = require('process');
const User = require('../models/users')
var jwt = require('jsonwebtoken')
const {SECRET} = process.env
const create =(user)=>User.create(user)


const fs=require('fs');


const find=()=>
{
return users.find()
}
const  findone = (id)=>
{
    return users.find();
}
const create =(title,tags)=>
{
    return users.create({title,tags});
    
}

const edit= (id)=>
{
    return users.findByIdAndUpdate(id)
}
const Delete= (id)=>
{
    return users.findByIdAndDelete(id)
}



const login =async({username,password})=>
{
    const user= await User.findOne({username}).exec()
    const valid = await user.comparePassword(password)
    if(!valid) throw " UN_AUTH"
    return jwt.sign({
        username,userId:user.id
    },SECRET,{expiresIn:'1h'})
  
}
  


module.exports =
{
    findone,
    create,
    edit,
    Delete,
    login
 
    
}