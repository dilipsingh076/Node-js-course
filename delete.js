const dbConnect = require('./mongodb');

const deleteData = async()=>{
    const data = await dbConnect();
    const result = await data.deleteOne({name: 'mohan singh'})

 // use deleteOne to only delete single record;
    // use deleteMany for delete all record all the data which have that name;
    // In deleteOne or deleteMany one accept one argument that is single object which have that name key.
}



module.exports = deleteData;
