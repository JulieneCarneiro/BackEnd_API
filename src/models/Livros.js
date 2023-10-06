import mongoose from "mongoose"

const Livros = mongoose.model("Livro",{
        titulo : String,
        preco : String,
        autor : String,
        generos : String,
        editora : String,
        idioma : String
        
})

export default Livros







