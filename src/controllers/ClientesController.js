import Clientes from "../models/Clientes.js" // NÃO UTILIZADO AINDA
import ClientesDAO from "../DAO/ClientesDAO.js"
import ValidacaoServices from "../../services/ValidacaoServices.js"

class ClientesController{
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app 
   */
  static rotas(app){
      /**
       * Rota para buscar todos os usuários
       */
      app.get("/clientes", async (req, res)=>{
          const clientes = await ClientesDAO.buscarTodosOsClientes()
          res.status(200).json(clientes)
      })

      ////////////////  CÓDIGO TESTE 
      // app.post("/clientes", (req, res)=>{
      //           const body = Object.values(req.body)
      //           const clienteModelado = new Clientes(...body)
      //           ClientesDAO.inserirCliente(clienteModelado)
      //           res.status(200).json({
      //               error: false,
      //               message: "DEU BOA FAMILIA"
      //           })
      //       })
      
      /**
       * Rota para buscar usuários pelo id
       */
      
    }}

export default ClientesController
// class ClientesController {

//   static rotas(app) {

//     app.get("/clientes", (req, res)=>{      
//       res.status(200).json(Clientes)
//     })
    
//       app.post("/clientes", (req, res)=>{
//         const body = Object.values(req.body)
//         const clienteModelado = new Clientes(...body)
//         ClientesDAO.inserirCliente(clienteModelado)
//         res.status(200).json({
//             error: false,
//             message: "DEU BOA FAMILIA"
//         })
//     })

//     //   app.post("/cliente", async (req, res)=>{
//     //     const body = Object.values(req.body)
//     //     const isValid = ValidacaoServices.validaCamposClientes(...body)
//     //     if(isValid){
//     //         const clienteModelado = new Clientes(...body)
//     //         try {
//     //             await ClientesDAO.inserirCliente(clienteModelado)
//     //             res.status(201).json({
//     //                 error: false,
//     //                 message: "Usuário criado com sucesso"
//     //             })
//     //             console.log("paçoca")
//     //         } catch (error) {
//     //             res.status(503).json({error: true, message: `Servidor indisponível no momento`})
//     //         }
//     //     } else {
//     //         res.status(400).json({error: true, message: `Campos invalidos`})
//     //     }
//     // })
//   }
// }

// export default ClientesController


