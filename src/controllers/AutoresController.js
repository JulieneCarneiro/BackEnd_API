import Autores from "../models/Autores.js" // NÃO UTILIZADO AINDA
import AutoresDAO from "../DAO/AutoresDAO.js"

class AutoresController{
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app 
   */
  static rotas(app){
      /**
       * BUSCA TUDO 
       */
      app.get("/autores", async (req, res)=>{
          const autores = await AutoresDAO.buscarTodosOsAutores()
          res.status(200).json(autores)
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
export default AutoresController