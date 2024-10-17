const Menu = require("../models/menu")

async function createMenu(req,res){
    const menu = new Menu(req.body)
    menu.save((error,menuStored)=>{
        if(error){
            res.status(400).send({msg:"Error al crear el menú"})
        }
        else {
            res.status(200).send(menuStored)
        }
    })
}

async function getMenus(req,res){
    const {active} = req.query

    let response =null 
 
    if(active===undefined){
       //devuelvo todos los Menus
       response= await Menu.find().sort({order:"asc"});
    } else{
       //devuelvo los activos o inactivos
       response = await Menu.find({active}).sort({order:"asc"})
    }
    if(!response){
        res.status(400).send({msg:"No se ha encontrado ningún menú"})
    } else{
        res.status(200).send(response);
    }
}

async function updateMenu(req,res){
const {id} = req.params;
const menuData = req.body;

Menu.findByIdAndUpdate({_id:id},menuData,(error)=>{
    if(error){
        res.status(400).send({
            msg:"Error al actualizar el menu"
        })
    } else{
        res.status(200).send({
            msg:"Actualización correcta"
        })
    }
})

}
module.exports={
    createMenu,getMenus,updateMenu
}