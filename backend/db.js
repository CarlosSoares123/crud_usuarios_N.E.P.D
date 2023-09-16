import dotenv from 'dotenv'

dotenv.config()
// Importe o pacote mysql
import mysql from 'mysql'

// Crie a conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

// Conecte-se ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err)
  } else {
    console.log('Conexão bem-sucedida ao banco de dados')
  }
})

// Exporte a conexão para ser usada em outros módulos
export default db
