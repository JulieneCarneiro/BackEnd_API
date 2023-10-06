import ClientesRepository from "../Repository/ClientesRepository.js";
import ClientesServices from "../Services/ClientesServices.js";

class ClientesController {
    static rotas(app) {

        app.post("/clientes", async (req, res) => {
            try {
                await ClientesServices.validaCamposCliente(req.body.nome, req.body.email, req.body.telefone, req.body.endereco)

                const cliente = req.body

                const inserir = await ClientesRepository.inserirCliente(cliente)

                res.status(201).json(inserir)
            } catch (error) {
                if (error.message == "Cliente já cadastrado.") {
                    res.status(406).json({ message: error.message })
                }

                res.status(400).json({ message: error.message })
            }
        });

        app.get("/clientes", async (req, res) => {
            try {
                const clientes = await ClientesRepository.buscarTodosOsClientes();
                res.status(200).json(clientes)
            } catch (error) {
                res.status(404).json(error.message)
            }
        });



        app.get("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesRepository.buscarClientePorId(req.params.id)
                if (!cliente._id) {
                    throw new Error("Cliente não encontrado para esse id")
                }
                res.status(200).json(cliente)

            } catch (error) {
                res.status(404).json({ message: error.message, id: req.params.id })
            }
        });


        app.put("/clientes/:id", async (req, res) => {
            const id = req.params.id
            const body = Object.entries(req.body)
            try {
                const cliente = req.body
                if (!cliente._id) {
                    throw new Error("Cliente não encontrado para esse id")
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
        
        app.delete("/clientes/:id", async (req, res) => {
            const id = req.params.id;
            try {
                // verifica se o autor com o ID especificado existe
                const cliente = await ClientesRepository.buscarClientePorId(id);
                if (!cliente._id) {
                    throw new Error("Cliente não encontrado")
                }
                const response = await ClientesRepository.deletarClientePorId(id)
                res.status(200).json(response)
            } catch (error) {
                res.status(404).json({ error: true, message: `Cliente não encontrado para o ID ${id}` });
            }
        });
    }
}

export default ClientesController;
