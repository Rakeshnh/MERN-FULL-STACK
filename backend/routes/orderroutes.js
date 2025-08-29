var express=require('express')
const route=express.Router()
const ordercontroller=require('../controllers/ordercontroller')



route.post("/saveorder",ordercontroller.createOrder)
// route.get("/",ordercontroller.getAllOrders)
// route.get("/:id",control.fetchOrderId)
// route.put("/updateorder/:id")
// route.delete("/deleteorder/:id")
module.exports=route