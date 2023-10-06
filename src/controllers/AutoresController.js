import AutoresRepository from "../Repository/AutoresRepository.js";
import AutoresServices from "../Services/AutoresServices.js";

class AutoresController {
  static rotas(app) {


    app.post("/autores", async (req, res) => {
      try {
        await AutoresServices.validaCamposAutor(req.body.nome, req.body.pais, req.body.livros)

        const autor = req.body

        const inserir = await AutoresRepository.inserirAutor(autor)

        res.status(201).json(inserir)
      } catch (error) {
        if (error.message == "Autor já cadastrado.") {
          res.status(406).json({ message: error.message })
        }

        res.status(400).json({ message: error.message })
      }
    });

    app.get("/autores", async (req, res) => {
      try {
        const autores = await AutoresRepository.buscarTodosOsAutores();
        res.status(200).json(autores)
      } catch (error) {
        res.status(404).json(error.message)
      }
    });


    app.get("/autores/:id", async (req, res) => {
      try {
        const autor = await AutoresRepository.buscarAutorPorId(req.params.id)
        if (!autor._id) {
          throw new Error("Autor não encontrado para esse id")
        }
        res.status(200).json(autor)

      } catch (error) {
        res.status(404).json({ message: error.message, id: req.params.id })
      }
    });


    app.put("/autores/:id", async (req, res) => {
      const id = req.params.id
      const body = Object.entries(req.body)
      try {
        const autor = req.body
        if (!autor._id) {
          throw new Error("Autor não encontrado para esse id")
        }
        body.forEach((elemento) => autor[elemento[0]] = elemento[1])

        delete autor._id

        AutoresServices.validaCamposAutor(autor.nome, autor.pais, autor.livros)
        const resposta = await AutoresRepository.atualizaAutorPorId(id, autor)

        res.status(200).json(resposta)
      } catch (error) {
        res.status(400).json({ message: error.message, id })
      }
    })

    app.delete("/autores/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const autor = await AutoresRepository.buscarAutorPorId(id);
        if (!autor._id) {
          o
          throw new Error("Autor não encontrado")
        }
        const response = await AutoresRepository.deletarAutorPorId(id)
        res.status(200).json(response)
      } catch (error) {
        res.status(404).json({ error: true, message: `Autor não encontrado para o ID ${id}` });
      }
    });
  }
}

export default AutoresController;
