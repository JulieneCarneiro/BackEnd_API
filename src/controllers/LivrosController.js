import LivrosRepository from "../Repository/LivrosRepository.js";
import LivrosServices from "../Services/LivrosServices.js";

class LivrosController {
  static rotas(app) {


    app.post("/livros", async (req, res) => {
      try {
        await LivrosServices.validaCamposLivro(req.body.titulo, req.body.preco, req.body.idioma)

        const livro = req.body

        const inserir = await LivrosRepository.inserirLivro(livro)

        res.status(201).json(inserir)
      } catch (error) {
        if (error.message == "Livro já cadastrado.") {
          res.status(406).json({ message: error.message })
        }

        res.status(400).json({ message: error.message })
      }
    });

    app.get("/livros", async (req, res) => {
      try {
        const livros = await LivrosRepository.buscarTodosOsLivros();
        res.status(200).json(livros)
      } catch (error) {
        res.status(404).json(error.message)
      }
    });


    app.get("/livros/:id", async (req, res) => {
      try {
        const livro = await LivrosRepository.buscarLivroPorId(req.params.id)
        if (!livro._id) {
          throw new Error("Livro não encontrado para esse id")
        }
        res.status(200).json(livro)

      } catch (error) {
        res.status(404).json({ message: error.message, id: req.params.id })
      }
    });


    app.put("/livros/:id", async (req, res) => {
      const id = req.params.id
      const body = Object.entries(req.body)
      try {
        const livro = req.body
        if (!livro._id) {
          throw new Error("Livro não encontrado para esse id")
        }
        body.forEach((elemento) => livro[elemento[0]] = elemento[1])

        delete livro._id

        LivrosServices.validaCamposLivro(livro.titulo, livro.preco, livro.idioma)
        const resposta = await LivrosRepository.atualizaLivroPorId(id, livro)

        res.status(200).json(resposta)
      } catch (error) {
        res.status(400).json({ message: error.message, id })
      }
    })

    app.delete("/livros/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const livro = await LivrosRepository.buscarLivroPorId(id);
        if (!livro._id) {
          o
          throw new Error("Livro não encontrado")
        }
        const response = await LivrosRepository.deletarLivroPorId(id)
        res.status(200).json(response)
      } catch (error) {
        res.status(404).json({ error: true, message: `Livro não encontrado para o ID ${id}` });
      }
    });
  }
}

export default LivrosController;
