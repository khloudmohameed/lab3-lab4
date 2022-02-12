 const fs = require('fs');
const express = require('express');
const userscontroller=require('../controllers/users')
const router = express.Router()

router.get("/:id",(req,res,next)=>{
    const {id}=req.params;
    userscontroller.findone(id)
    .then((users)=>{
        if(!users)
        {
            res.status(404).end()
            return;
        }
        res.json(users)
    })
    .catch(e =>{
        res.status(500).json(e)
    })
   
    
})
router.post("/",(req,res,next)=>{
    const {title}=req.body;
    const {tags}=req.body;
    const users=userscontroller.create(title,tags)
    .then((users)=>
    { res.json(users);
    })
    .catch(e =>res.status(422).json(e))
   
       
});

router.patch("/:id",(req,res,next)=>{
 
    const {id}=req.params;
    const {title}=req.body;
    const users=userscontroller.updateusers(id,title)
    res.json(users)
    
  
})

router.delete("/:id",(req,res,next)=>{

    const {id}=req.params;
    const users=userscontroller.deleteusers(id)
    res.json(users)
    
    
})

module.exports=router