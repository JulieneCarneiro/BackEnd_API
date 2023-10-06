import mongoose from "mongoose"


const Generos = mongoose.model("Genero",{
        livros : String,
        nome : String
})


export default Generos




