
import express from "express";
const app = express();
import dotenv from "dotenv";
import {Db_connection} from './src/db/index.js'
import { Routes } from './src/routes/index.js'


dotenv.config()
Db_connection()
app.use(express())
app.use(express.json())
app.use('/v1/api', Routes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port  = process.env.port || 3000
app.listen(port, () => {
  console.log('Server listening on port 3000');
});
