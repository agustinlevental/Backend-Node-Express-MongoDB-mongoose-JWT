require('dotenv').config();

const DB_USER = "agustinlevental";
const DB_PASSWORD = process.env.DB_PASSWORD; // Remove the extra semicolons
const DB_HOST = "mern.olui7.mongodb.net/MERN?retryWrites=true&w=majorit";
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