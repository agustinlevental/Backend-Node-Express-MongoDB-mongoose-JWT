const newsLetter = require("../models/newsLetter");
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

function getEmails(req,res){
    const {page=1,limit=10} = req.query;

    const options ={
        page: parseInt(page),
        limit: parseInt(limit),
    }

    NewsLetter.paginate({},options,(error,emailStored)=>{
        if(error){res.status(400).send({msg:"Error al obtener los emails"})}
        else{
            res.status(200).send(emailStored);
        }
    })
}

function deleteEmail(req,res){
    const {id} = req.params

    NewsLetter.findByIdAndDelete(id,(error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el registro"})
        } else {
            res.status(200).send({msg:"Eliminación correta"})
        }
    })
}
module.exports ={suscribeEmail,getEmails,deleteEmail}