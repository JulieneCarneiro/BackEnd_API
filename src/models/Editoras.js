import mongoose from "mongoose"

const Editoras = mongoose.model("Editora",{
        nome : String,
        email : String,
        telefone : String
})

export default Editoras


