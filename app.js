import express from "express";
import cors from "cors";
import {config} from "dotenv"
import mongoose from "mongoose";
import ClientesController from "./src/controllers/ClientesController.js"
import AutoresController from "./src/controllers/AutoresController.js"
import LivrosController from "./src/controllers/LivrosController.js";
import PedidosController from "./src/controllers/PedidosController.js";
import GenerosController from "./src/controllers/GenerosController.js";
import EditorasController from './src/controllers/EditorasController.js'

config()
const app = express()
app.use(express.json())
app.use(cors("*"))


const port = process.env.PORT || 3000
const USER_DB = process.env.USER_DB || "local"
const DATABASE = process.env.DATABASE || "local"
const PASSWORD = process.env.PASSWORD || "local"
const CLUSTER = process.env.CLUSTER || "local"

mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/`)
.then(()=>{
  app.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀✈️`)
  });
})
.catch((e)=>console.log(e.message))

AutoresController.rotas(app)
ClientesController.rotas(app)
EditorasController.rotas(app)
GenerosController.rotas(app)
LivrosController.rotas(app)
PedidosController.rotas(app)
