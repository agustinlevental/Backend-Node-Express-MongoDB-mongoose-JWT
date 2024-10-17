require('dotenv').config();

const DB_USER = "agustinlevental";
const DB_PASSWORD = process.env.DB_PASSWORD; 
const DB_HOST = "mern.7ai8t.mongodb.net/?retryWrites=true&w=majority&appName=Mern";
const API_VERSION = "v1";
const IP_SERVER = "localhost";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  API_VERSION,
  IP_SERVER,
  JWT_SECRET_KEY,
};