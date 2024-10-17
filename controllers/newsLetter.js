const NewsLetter = require("../models/newsLetter");

function suscribeEmail(req,res){
    const {email} = req.body;

    if(!email) res.status(400).send({msg:"El email es obligatorio"})
    const newsLetter = new NewsLetter({
        email:email.toLowerCase(),
    });

    newsLetter.save((error)=>{
if(error){
    res.status(400).send({msg:"El email ya está registrado"})
} else{
    res.status(200).send({msg:"Email registrado"})
}
    })
}

module.exports ={suscribeEmail}