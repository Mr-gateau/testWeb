const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createConnection({
  host: "localhost", // adresse du serveur
  port: process.env.LOCAL,
  user: process.env.NAME, // le nom d'utilisateur
  password: `${process.env.PASS}`, // le mot de passe
  database: process.env.DATABASE, // le nom de la base de données
});
module.exports = connection;
