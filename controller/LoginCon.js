const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User} = require('../models/db')
const loginCon = (req,res)=>{
    userLog = req.body
    User.findOne({where:{name:userLog.name}}).then(userData=>{
        console.log("ini tipe data: ",typeof userData)
        if(bcrypt.compareSync(userLog.password,userData.password)){
            const token = jwt.sign({'user_id': userData.user_id,'name':userData.name},'kucinghitamnakal')
            res.json({
                ok: 'true',
                status:'You are loggin',
                'access': token
            })
            req.session.auth = userData
        }else{
            res.status(401)
    
        }
    })
//    userData = {
//        "name":"Fatkhan",
//        "password":"gokil123"
//    } 
}
module.exports = loginCon