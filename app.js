import express from "express";
import cors from "cors";
import ClientesController from "./src/controllers/ClientesController.js"

const app = express()
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Servidor disponível em http://localhost:${port}`)
})

app.use(express.json())


ClientesController.rotas(app)


app.use(cors('*'))