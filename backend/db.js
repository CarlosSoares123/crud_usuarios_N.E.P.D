import mysql from 'mysql'

export const db = mysql.createConnection({
  host: "localhost",
  user:"root",
  password: "WILIETE123",
  database: "crud"
}) 