const jwt = require("../utils/jwt");

function asureAuth(req,res,next){
   if(!req.headers.authorization){
   return res.status(403).send({msg:"la petición no tiene la cabecera de autenticación"})
   }
   const token=req.headers.authorization.replace("Bearer ", "")
   try {
    const payloadUser= jwt.decoded(token)
const {exp} = payloadUser;
const currentData= new Date().getTime();
if(exp<=currentData){
    return res.status(400).send({msg:"el token ha expirado"})
} else{
  
    req.user=payloadUser
next();
}
   } catch (error) {
    return res.status(400).send({msg:"token invalido"})
   }
    
}
module.exports={asureAuth};