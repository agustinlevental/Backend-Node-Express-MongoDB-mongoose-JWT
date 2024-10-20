const bcrypt = require("bcryptjs")
const User = require("../models/users")
const image = require("../utils/image")

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

async function createUser(req,res){
const {password} = req.body;

const salt = bcrypt.genSaltSync(10);
const hashPassword = bcrypt.hashSync(password,salt)


const user = new User ({
    ...req.body,
    active:false,
    password:hashPassword,
})
if(req.files.avatar){
  const imagePath = image.getFilePath(req.files.avatar)
 user.avatar=imagePath
}

user.save((error,userStored)=>{
    if(error){
        res.status(400).send({msg:"Error al crear el usuario"})
    } else{
        res.status(201).send(userStored)
    }
})

}

async function updateUser(req, res) {
    const { id } = req.params;
    const userData = req.body;
  
    try {
      if (userData.password) {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword  
   = bcrypt.hashSync(userData.password, salt);
        userData.password = hashPassword;
      } else {
        delete userData.password; 
  
      }
  if(req.files.avatar){
const imagePath = image.getFilePath(req.files.avatar)
userData.avatar=imagePath;
  }

      await User.findByIdAndUpdate(id, userData);
      res.status(200).send({ msg: "Actualización correcta" });
    } catch (error) {
    
      res.status(400).send({ msg: "Error al actualizar el usuario"   
   });
    }
  }

async function deleteUser(req,res){
    const {id} = req.params
    User.findByIdAndDelete(id,(error)=>{
if(error){
    res.status(400).send({
        msg:"Error al eliminar el usuario"
    })
}
res.status(200).send({
    msg:"Usuario eliminado"
})
    })
}

module.exports={
    getMe,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}