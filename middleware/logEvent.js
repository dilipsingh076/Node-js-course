const {format} = require('date-fns');
const {v4 : uuid} = require('uuid');

const fs = require('fs');
const fsPromisess = require('fs').promises;
const path = require('path');

console.log("check path in side log events", path.join(__dirname))


const logEvents = async (message,logName) =>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}`

    try{
        if(!fs.existsSync(path.join(__dirname, '..' ,'logs'))){
            await fsPromisess.mkdir(path.join(__dirname, '..' ,'logs'))
        }
        //testing
        await fsPromisess.appendFile(path.join(__dirname,'..' , 'logs',logName),logItem)
    }catch(err){
        console.log('err',err)
    }
}

const logger = (req, res, next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt')
    console.log(`${req.method} ${req.path}`)
    next();
}



module.exports =  { logger,logEvents,};