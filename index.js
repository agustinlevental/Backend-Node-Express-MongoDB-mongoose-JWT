const mongoose =  require("mongoose");
require('dotenv').config();
const app= require("./app")
const {DB_USER,DB_HOST,IP_SERVER,API_VERSION} = require("./constants")
const DB_PASSWORD = process.env.DB_PASSWORD; 

const PORT= process.env.port || "3977"
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`
   ,(error)=>{ 
        if(error) throw error
       app.listen(PORT,()=>{
        console.log("#########################") 
           console.log("#########APIRest#############")
           console.log("#########################") 
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
       })
    }
)
