import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user.js'

const app = express();

app.use(express());
app.use(cors());
app.use(express.json())

app.use('/', userRoutes)

app.listen(8000, () => {
  console.log("Servidor Online na porta 8000")
});
