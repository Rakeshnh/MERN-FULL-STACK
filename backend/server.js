var mongoose=require('mongoose')
var express=require('express')
// var express=express()
var enviro=require('dotenv')
var app=express()
const route=require('./routes/orderroutes')
app.use('/api/products',route)
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/product")
.then(()=>{
    console.log("success")
})
.catch(()=>{
    console.log("error")
})


 app.listen(3000,()=>{
 console.log('server is runing');
 })
