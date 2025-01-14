const {logEvent} = require('./logEvent')
const errorHandler = (err,req,res,next) =>{
    logEvent(`${err.name} : ${err.message}`, 'errLog.txt')
    console.log('check error stack ', err.stack);
    res.status(500).send(err.message);
}

module.exports = errorHandler;