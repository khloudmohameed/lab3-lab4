const fs=require('fs');
const { title } = require('process');
const users = require('../models/users')

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

module.exports =
{
    findone,
    create,
    edit,
    Delete
 
    
}