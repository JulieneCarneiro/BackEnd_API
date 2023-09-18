import Editoras from "../models/Editoras.js" // NÃO UTILIZADO AINDA
import EditorasDAO from "../DAO/EditorasDAO.js"

class EditorasController{
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app 
   */
  static rotas(app){
      /**
       * BUSCA TUDO 
       */
      app.get("/editoras", async (req, res)=>{
          const editoras = await EditorasDAO.buscarTodasAsEditoras()
          res.status(200).json(editoras)
      })
        
    //   //BUSCAR
    //     app.get("/autores", (req, res)=>{
    //         // const autores = AutoresMetodos.buscarTodosOsAutores() // NÃO FOI CRIADO AINDA
    //         res.status(200).json('ta rodano')
    //     })

    //     //INSERIR
    //     app.post("/autores", (req, res)=>{
    //         const body = Object.values(req.body)
    //         const autorModelado = new Autores(...body)
    //         AutoresMetodos.inserirAutor(autorModelado) // NÃO FOI CRIADO AINDA
    //         res.status(200).json({
    //             error: false,
    //             message: "Autor inserido com sucesso!"
    //         })
    //     })
    }
}
export default EditorasController