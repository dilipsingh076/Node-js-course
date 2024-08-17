const reqFilter = (req, res, next)=>{
    console.log('check req filter', req.query)
    if(!req.query.age){
        res.send('please provide age');
    }else if(req.query.age<18){
        res.send('you can not access');
    }
    else{
        next()
    }

}

module.exports = reqFilter;
