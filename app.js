const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const {API_VERSION} = require("./constants")


const app = express();

//import routings
const authRoutes = require("./router/auth")

//configure body parse
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Configure Static Folder
app.use(express.static("uploads"))

//configure header HTTP CORS
app.use(cors());

//Configure Routings
app.use(`/api/${API_VERSION}`,authRoutes);

module.exports= app;