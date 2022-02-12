const mongoose = require('mongoose');
const usersshema=mongoose.Schema({
userName:{
    type:String,
    required:true,
    unique:true,
    minlength:8,

},
firstName:
{
    type:String,
    required:true,
    minlength:3,
    maxlength:15,

},
lastName:
{
    type:String,
    required:true,
    minlength:3,
    maxlength:15,

},
dob:Date
},{timeStamp:true}
  
);

const todomodul=mongoose.model('User','usersshema');
module.exports=usersmodul