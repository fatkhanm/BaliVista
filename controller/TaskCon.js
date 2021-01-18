const verifyToken = require('./Auth')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const {User,Favorite} = require('../models/db')

//Get Movies
getMovie = (req,res)=>{
    jwt.verify(req.token,'kucinghitamnakal',(err,authData)=>{
        if(authData){
            res.status(403)
            res.send("Not Allowed")
        }
        res.status(403)
    })
}
getMovieTitle = (req,res)=>{
    jwt.verify(req.token,'kucinghitamnakal',(err,authData)=>{
        if(err){
            res.setStatus(403)
        }else{
            console.log(req.params.title)
            try{
                axios.get('http://www.omdbapi.com/?apikey=6d477c8b&t='+req.params.title.toLowerCase().replace('/\s/g','+')).then(data=>{
                res.json({'title': data.data.Title,'url-poster':data.data.Poster})
                }).catch(error =>{
                    console.log(error)
                })
                res.status(202)
            }catch(e){
                console.log(e)
            }
        }
    })
}
getFavMovie = (req,res)=>{
    jwt.verify(req.token,'kucinghitamnakal',(err,authData)=>{
        if(err){
            res.status(403)
        }else{
            result = Favorite.findAll({where:{user_id: authData.user_id}}).then(async (filmfav)=>{
                result = await Promise.all(filmfav.map(async value=>{
                    console.log(value.title)
                    const data = await axios.get('http://www.omdbapi.com/?apikey=6d477c8b&t='+value.title.toLowerCase().replace('/\s/g','+')).then(response=>response.data)
                    return await {'title': data.Title,'url-poster': data.Poster}
                }))
                res.json(result)
            })
        }
    })
}
postFavMovie = (req,res)=>{
    jwt.verify(req.token,'kucinghitamnakal',(err,authData)=>{
        if(err){
            res.status(403)
        }else{
            Favorite.create({'title': req.body.title, 'user_id':authData.user_id}).then(add => res.json(add))
        }
    })
}
module.exports ={
    getFavMovie,
    getMovie,
    getMovieTitle,
    postFavMovie
}