import mongoose from "mongoose"

const Autores = mongoose.model("Autor", {
        nome : String,
        pais : String,
        livros : String
})

export default Autores