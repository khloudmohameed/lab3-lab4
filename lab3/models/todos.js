const mongoose = require('mongoose');
const todoshema=mongoose.Schema({
    userId:
    {
        type:mongoose.SchemaType.ObjectedId,
        ref:User
    },
title:{
    type:String,
    required:true,
    minlength:5,
    maxlength:20,
},
status:
{
    type:String,
    default:"to-do",
    enum:["to-do","in progress","done"]
},
tags: [{
    type: String,
    maxlength:10
}]

   
});

const todomodul=mongoose.model('TODO','todoshema');
module.exports=todomodul