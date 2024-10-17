const express = require("express");
const newsLetterController= require ("../controllers/newsLetter");
const md_auth = require ("../middlewares/authenticated");

const api= express.Router();

api.post("/newsletter",newsLetterController.suscribeEmail);

module.exports = api;