const fs = require('fs');
const express = require('express');
const todocontroller=require('../controllers/todo')
const router = express.Router()

router.get("/:id",(req,res,next)=>{
    const {id}=req.params;
    todocontroller.findone(id)
    .then((todo)=>{
        if(!todo)
        {
            res.status(404).end()
            return;
        }
        res.json(todo)
    })
    .catch(e =>{
        res.status(500).json(e)
    })
   
    
})
router.post("/",(req,res,next)=>{
    const {title}=req.body;
    const {tags}=req.body;
    const todo=todocontroller.create(title,tags)
    .then((todo)=>
    { res.json(todo);
    })
    .catch(e =>res.status(422).json(e))
   
       
});

router.patch("/:id",(req,res,next)=>{
 
    const {id}=req.params;
    const {title}=req.body;
    const todo=todocontroller.updatetodo(id,title)
    res.json(todo)
    
  
})

router.delete("/:id",(req,res,next)=>{

    const {id}=req.params;
    const todo=todocontroller.deletetodo(id)
    res.json(todo)
    
    
})

module.exports=router