const fs=require("fs");
const cors=require('cors')
const express =require("express");
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab3_nodejs');

const todoRoutes= require('./routes/todo');
const usersRoutes= require('./routes/users');
const app =express();
app.use(express.static("./static"))
app.use(express.json());

app.use(cors())
app.use('/todo',todoRoutes)
app.use('/users',todoRoutes)




app.listen(3000,()=>{
  console.log("app");
})