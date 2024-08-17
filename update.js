const dbConnect = require('./mongodb');

const updateData = async() =>{
    let data = await dbConnect();
    let result = await data.updateOne({ name: "mohan"}, {$set:{name:'mohan singh'}})


    // use updateOne to only update single record;
    // use update for update all record all the data which ahve that name;
    // In update or update one accept two argument both are object first is find object that which object we have to update and second is what we have to update in that we pass that object there using {$set{}}
}

module.exports = updateData;