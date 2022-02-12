const fs=require('fs');
const { title } = require('process');
const TODO = require('../models/todos')

const find=()=>
{
return TODO.find()
}
const  findone = (id)=>
{
    return TODO.find();
}
const create =(title,tags)=>
{
    return TODO.create({title,tags});
    
}

const edit= (id)=>
{
    return TODO.findByIdAndUpdate(id)
}
const Delete= (id)=>
{
    return TODO.findByIdAndDelete(id)
}

module.exports =
{
    findone,
    create,
    edit,
    Delete
 
    
}