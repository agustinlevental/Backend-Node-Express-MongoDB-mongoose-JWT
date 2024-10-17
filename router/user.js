const express= require ("express");
const multiparty = require ("connect-multiparty")
const userController = require("../controllers/user")
const md_auth = require("../middlewares/authenticated")

const md_upload = multiparty({uploadDir:"./uploads/avatar"})
const api = express.Router();

api.get("/user/me",[md_auth.asureAuth],userController.getMe);
api.get("/users",[md_auth.asureAuth],userController.getUsers)
api.post("/user",[md_auth.asureAuth,md_upload],userController.createUser)
module.exports=api;