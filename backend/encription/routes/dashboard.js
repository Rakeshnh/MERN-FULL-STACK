const express=require('express')
const auth=require("../middleware/auth")
const router=express.Router()

router.get("/",auth,(req,res)=>{
    res.json({message:`Welcome ${req.user.email}, this is your dashboard`})
})

module.exports=router