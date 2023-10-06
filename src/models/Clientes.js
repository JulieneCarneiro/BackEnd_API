import mongoose from "mongoose"

const Clientes  = mongoose.model("Cliente", {
        nome : String, 
        email : String, 
        telefone : String, 
        endereco : String
})

export default Clientes