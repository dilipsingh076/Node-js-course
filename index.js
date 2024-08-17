const express = require('express')
require('./config')
const os = require('os')
const dbConnect = require('./mongodb')
const mongoose = require('mongoose');
const localcollectionnames = require('./localcollectionnames')
const app = express()
const http = require('http')
const fs = require('fs');
const path = require('path');
const reqFilter = require('./middleware/middleware');
const  insertData  = require('./insert');
const updateData = require('./update');
const deleteData = require('./delete');
const multer = require('multer');
const publicPath = path.join(__dirname,'public');
app.use(express.json())
console.log("check path", publicPath)

const route = express.Router()




//os module funcitons
console.log('check os',os.arch())
console.log("check host anem", os.hostname())









// upload file using multer package.

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,callback){
            callback(null, "img")
        },
        filename:function(req,file,callback){
            callback(null, file.fieldname+"_"+Date.now()+".jpg")
        }
    })
}).single("user_file")


app.post("/upload",upload,(req,res)=>{
    res.send("file upload succesfully")
})









// search api with mongoose
app.get('/search/:key', async(req, res)=>{
    console.log('check params', req.params.key)
    let data =  await localcollectionnames.find({
        "$or":[
            {"name":{$regex:req.params.key}}
        ]
    })
  res.send(data)
})






// mongoose crud operatrions.

// app.post("/create",async(req, res)=>{
//     console.log('cehck req boyd', req.body)
//     const data = new localcollectionnames(req.body);
//     let result = await data.save()
//     res.send(result)
// })
// app.get("/list",async(req, res)=>{
//     console.log('cehck req boyd', req.body)
//     const data = await localcollectionnames.find();
//     res.send(data)
// })
// app.delete("/delete",async(req, res)=>{
//     console.log('cehck req boyd', req.body)
//     const data = await localcollectionnames.deleteOne({_id: req.body.id});
//     res.send(data)
// })
// app.put("/update",async(req, res)=>{
//     console.log('cehck req boyd', req.body)
//     const data = await localcollectionnames.updateOne({_id: req.body.id}, {$set:{name:req.body.name, price:req.body.price}});
//     res.send(data)
// })







// // access / read mongo db database from here.
// mongoose.connect("mongodb://localhost:27017/localDatabase")
// // schema apply the validaiton in the database.
// const localCollectionNameSchema = new mongoose.Schema({
//     name:String,
//     model:String,
// });

// const saveInDB = async ()=>{
//     const localCollectionNameModel =  mongoose.model('localcollectionnames',localCollectionNameSchema)
//     let data = new localCollectionNameModel({name:"vivo nowcheck",model:"vivo as"});
//     // let result = await data.save()
//     // console.log('resutlt', result)

//     // this is mongodb  connection here if we don't use mongodb we use mongoose connection.
//     // let data = await dbConnect();
//     // data = await data.find({}).toArray();
//     // console.log("check data after move ", data)
//     // // insert a data in database
//     // insertData()

//     // update a data in database
//     // updateData()

//     // delete a data in database
//     // deleteData()
// }
// saveInDB()



// const updateInDB = async ()=>{
//     const localCollectionNameModel =  mongoose.model('localcollectionnames',localCollectionNameSchema)
//     let data = await localCollectionNameModel.updateOne({name:"m8"},{$set:{model:"iphone"}})

//     // this is mongodb  connection here if we don't use mongodb we use mongoose connection.
//     // let data = await dbConnect();
//     // data = await data.find({}).toArray();
//     // console.log("check data after move ", data)
//     // // insert a data in database
//     // insertData()

//     // update a data in database
//     // updateData()

//     // delete a data in database
//     // deleteData()


// }
// updateInDB()


// const deleteInDB = async() =>{
//     const localCollectionNameModel =  mongoose.model('localcollectionnames',localCollectionNameSchema)
//     let data = await localCollectionNameModel.deleteOne({name:"m8"})

// }
// deleteInDB()

// const findInDB = async() =>{
//     const localCollectionNameModel =  mongoose.model('localcollectionnames',localCollectionNameSchema)
//     let data = await localCollectionNameModel.find({name:"m8"})
//     console.log("check data in find function ", data)

// }
// findInDB()









// create dynamic html pages using this ejs.
app.set('view engine', 'ejs')


// app.use(express.static(publicPath))



// create a middleware in same file


route.use(reqFilter)




app.get('/',(_,res)=>{
    // res.sendFile(`${publicPath}/index.html`)
    res.send('Welcome to Home page')
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/profile',(_,res)=>{
    const user = {
        name :'dilip singh',
        email:'dilipsinghf@gmail.co,',
        city:'surat',
        skills:['php', 'js','react','java', 'node']
    }
    res.render(`profile`,{user})
})

app.get('/login',(_,res)=>{
    res.render('login')
})

route.get('/contact',(_,res)=>{
    res.send('this is contact page')
})




//this check all the routes if not find so send user to 404 page.
// app.get('*',(_,res)=>{
//     res.sendFile(`${publicPath}/404.html`)
// })

app.use('/',route)

app.listen(5000);