const verifyToken = (req,res,next)=>{
    bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ')[1]
        req.token = bearer
        next()
    }else{
        res.sendStatus(403)
    }
}
module.exports = verifyToken