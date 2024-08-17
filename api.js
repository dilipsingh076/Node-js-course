
const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');


const app = express();

// we use this to get req from the node
app.use(express.json())



app.get('/',async(req,res)=>{
    let data = await dbConnect();
    data = await data.find({}).toArray()

    res.send(JSON.stringify(data) )
})


app.post('/', async(req,res)=>{
    console.log("check req and res", req.body)
    let data = await dbConnect();
     await data.insertOne(req.body)
     // this post response send you only can see in the postman because browser only support the get method call not post method calls.
    res.send(req.body)
})


app.put('/:name', async(req, res)=>{
    // we use params query if we are tyring to update that key which is prevously a diffrent key like my name is dilip and i want to update that name in dilip singh so i have to pass my previosu name in params i can not pass my name in body so for that i have to use this syntext
    // '/:<your value which you want to update. and in update function in first parameter you user req.params other wise if you use body so use req.body.>'
    let data = await dbConnect();
    await data.updateOne({name:req.params.name},{$set :{name: req.body.name,model:req.body.model}})
    res.send("updated")
})


app.delete("/" ,async(req,res)=>{
let data = await dbConnect();
// we can delete data uisng params also like the udpate one and also like the id one.
console.log("req console", req.body.id)
await data.deleteOne({_id: new mongodb.ObjectId(req.body.id)})
res.send("delete succesfully");
})




app.listen(5000)

