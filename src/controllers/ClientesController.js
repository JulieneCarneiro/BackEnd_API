import ClientesRepository from "../Repository/ClientesRepository.js";
import ClientesServices from "../Services/ClientesServices.js";
import Clientes from "../models/Clientes.js";

class ClientesController {
    static rotas(app) {

       

        app.get("/clientes", async (req, res) => {
            try {
                const clientes = await ClientesRepository.buscarTodosClientes()
                res.status(200).json(clientes)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })


        app.get("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesRepository.buscarClientePorId(req.params.id)
                if (!cliente) {
                    throw new Error("Id do cliente está inválido ou não cadastrado")
                }
                res.status(200).json(cliente)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/clientes", async (req, res) => {
            try {
              ClientesServices.validaCamposCliente(req.body.nome, req.body.endereco, req.body.telefone, req.body.email);
              const cliente = req.body;
              const inserir = await ClientesRepository.criarCliente(cliente);
              res.status(201).json(inserir);
            } catch (erro) {
              res.status(400).json({ message: erro.message });
            }
          });


        app.put("/clientes/:id", async (req, res) => {
            const id = req.params.id
            const body = Object.entries(req.body)
            try {
                const cliente = req.body
                if (!cliente._id) {
                    throw new Error("Cliente não encontrado para esse id")
                    console.error();
                }
                body.forEach((elemento) => cliente[elemento[0]] = elemento[1])
                delete cliente._id
                ClientesServices.validaCamposCliente(cliente.nome, cliente.pais, cliente.livros)
                const resposta = await ClientesRepository.atualizaClientePorId(id, cliente)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(400).json({ message: error.message, id })
            }
        })

        // app.put("/cliente/:id", async (req, res) => {
        //     const id = req.params.id
		// 	const body = Object.entries(req.body)
		// 	const valido = await  ClientesServices.validaCamposCliente(req.body.nome, req.body.endereco, req.body.telefone, req.body.email)
		// 	if (valido) {
		// 		await ClientesRepository.atualizarClientePorId(id, cliente)
		// 		res.status(200).json({ message: "Cliente atualizado com sucesso" })
		// 	} else {
		// 		res.status(404).json({ message: "Cliente não encontrado" })
		// 	}
        // })

        
        app.delete("/clientes/:id", async (req, res) => {
            const id = req.params.id;
            try {
                const response = await ClientesRepository.deletarClientePorId(id)
                res.status(200).json(response)
            } catch (error) {
                res.status(404).json({ error: true, message: `Cliente não encontrado para o ID ${id}` });
            }
        });
    }
}

export default ClientesController;
