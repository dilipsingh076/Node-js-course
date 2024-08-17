const dbConnect = require('./mongodb')

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertOne({
        name:'mohan',
        brand:'vivo',
        price:230,
    })
    if(result.acknowledged){
        console.log("insert funciton", result)

    }
}

module.exports = insert;