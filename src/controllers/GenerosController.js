import GenerosRepository from "../Repository/GenerosRepository.js";
import GenerosServices from "../Services/GenerosServices.js";

class GenerosController {
  static rotas(app) {


    app.post("/generos", async (req, res) => {
      try {
        await GenerosServices.validaCamposGenero(req.body.nome)

        const genero = req.body

        const inserir = await GenerosRepository.inserirGenero(genero)

        res.status(201).json(inserir)
      } catch (error) {
        if (error.message == "Genero já cadastrado.") {
          res.status(406).json({ message: error.message })
        }

        res.status(400).json({ message: error.message })
      }
    });

    app.get("/generos", async (req, res) => {
      try {
        const generos = await GenerosRepository.buscarTodosOsGeneros();
        res.status(200).json(generos)
      } catch (error) {
        res.status(404).json(error.message)
      }
    });


    app.get("/generos/:id", async (req, res) => {
      try {
        const genero = await GenerosRepository.buscarGeneroPorId(req.params.id)
        if (!genero._id) {
          throw new Error("Gênero não encontrado para esse id")
        }
        res.status(200).json(genero)

      } catch (error) {
        res.status(404).json({ message: error.message, id: req.params.id })
      }
    });


    app.put("/generos/:id", async (req, res) => {
      const id = req.params.id
      const body = Object.entries(req.body)
      try {
        const genero = req.body
        if (!genero._id) {
          throw new Error("Gênero não encontrado para esse id")
        }
        body.forEach((elemento) => genero[elemento[0]] = elemento[1])

        delete genero._id

        GenerosServices.validaCamposGenero(genero.nome)
        const resposta = await GenerosRepository.atualizaGenerosPorId(id, genero)

        res.status(200).json(resposta)
      } catch (error) {
        res.status(400).json({ message: error.message, id })
      }
    })

    app.delete("/generos/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const genero = await GenerosRepository.buscarGeneroPorId(id);
        if (!genero._id) {
          o
          throw new Error("Gênero não encontrado")
        }
        const response = await GenerosRepository.deletarGeneroPorId(id)
        res.status(200).json(response)
      } catch (error) {
        res.status(404).json({ error: true, message: `Gênero não encontrado para o ID ${id}` });
      }
    });
  }
}

export default GenerosController;
