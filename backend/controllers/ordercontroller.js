const Order=require('../models/order')

 exports.createOrder=async (req,res)=>{
    try{
            const orders= new Order(req.body);
    // const{name,price,category,instack}=req.body;
    const savedOrder = await product.save();
            res.json(savedOrder)
    }
    catch(err ){console.log('error')
    res.json({message:'data not saved'})
    }
   }

//     exports.getAllOrders=async (req,res)=>{
//     try{
//             const orders= new Order();
    
//                await orders.save()
//             res.json(orders)
//     }
//     catch(err ){console.log('error')}
//     res.json({message:'data not saved'})
//    }




// export.getOrderId=async function fetchorderById((req,res)=>{
// try{
//    const id={req.params.id}
//    const order = new Order.findById(id);
//     res.json(order)
// }
//  catch(err ){console.log('error')}
//     res.json({message:'data not saved'})
//    }
// )

// export.updateOrderId=async function updateorder((req,res)=>{
// try{
//    const id={req.params.id}
//    const order = new Order.findById(id);
//     res.json(order)
// }
//  catch(err ){console.log('error')}
//     res.json({message:'data not saved'})
//    }
// )
    


