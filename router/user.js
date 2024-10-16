const express= require ("express");
const userController = require("../controllers/user")
const md_auth = require("../middlewares/authenticated")
const api = express.Router();

api.get("/user/me",[md_auth.asureAuth],userController.getMe);
module.exports=api;