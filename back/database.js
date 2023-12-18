const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

//Configuración de la DB y uso de variables de entorno para mayor seguridad  y portabilidad

const database = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PUERTO
});

module.exports = database;
