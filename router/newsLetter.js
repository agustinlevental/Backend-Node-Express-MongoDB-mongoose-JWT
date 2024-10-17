const express = require("express");
const newsLetterController= require ("../controllers/newsLetter");
const md_auth = require ("../middlewares/authenticated");

const api= express.Router();

api.post("/newsletter",newsLetterController.suscribeEmail);
api.get("/newsletter",[md_auth.asureAuth],newsLetterController.getEmails)
api.delete("/nesletter/:id",[md_auth.asureAuth],newsLetterController.deleteEmail)

module.exports = api;