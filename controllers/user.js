const User = require("../models/users")

async function getMe(req,res){
    const {user_id} = req.user;

    const responseUser = await User.findById(user_id);
    
    if(!responseUser){
        res.status(400).send({msg:"no se ha encontrado usuario"})
    } else{
        res.status(200).send(responseUser)
        
    }
    
}

async function getUsers(req,res){
    const {active} = req.query;
 let response =null 
 if(active===undefined){
    //devuelvo todos los usuarios
    response= await User.find();
 } else{
    //devuelvo los activos o inactivos
    response = await User.find({active})
 }
res.status(200).send(response)
}

module.exports={
    getMe,
    getUsers
}