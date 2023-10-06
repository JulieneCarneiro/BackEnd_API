import EditorasRepository from "../Repository/EditorasRepository.js";
import EditorasServices from "../Services/EditorasSevices.js"

class EditorasController {
  static rotas(app) {

    app.post("/editoras", async (req, res) => {
      try {
        await EditorasServices.validaCamposEditora(req.body.nome, req.body.email, req.body.telefone)

        const editora = req.body

        const inserir = await EditorasRepository.inserirEditora(editora)

        res.status(201).json(inserir)
      } catch (error) {
        if (error.message == "Editora já cadastrada.") {
          res.status(406).json({ message: error.message })
        }

        res.status(400).json({ message: error.message })
      }
    });

    app.get("/editoras", async (req, res) => {
      try {
        const editoras = await EditorasRepository.buscarTodosAsEditoras();
        res.status(200).json(editoras)
      } catch (error) {
        res.status(404).json(error.message)
      }
    });


    app.get("/editoras/:id", async (req, res) => {
      try {
        const editora = await EditorasRepository.buscarEditoraPorId(req.params.id)
        if (!editora._id) {
          throw new Error("Editora não encontrada para esse id")
        }
        res.status(200).json(editora)

      } catch (error) {
        res.status(404).json({ message: error.message, id: req.params.id })
      }
    });


    app.put("/editoras/:id", async (req, res) => {
      const id = req.params.id
      const body = Object.entries(req.body)
      try {
        const editora = req.body
        if (!editora._id) {
          throw new Error("Editora não encontrada para esse id")
        }
        body.forEach((elemento) => editora[elemento[0]] = elemento[1])

        delete editora._id

        EditorasServices.validaCamposEditora(editora.nome, editora.email, editora.telefone)
        const resposta = await EditorasRepository.atualizaEditoraPorId(id, editora)

        res.status(200).json(resposta)
      } catch (error) {
        res.status(400).json({ message: error.message, id })
      }
    })

    app.delete("/editoras/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const editora = await EditorasRepository.buscarEditoraPorId(id);
        if (!editora._id) {
          throw new Error("Editora não encontrada")
        }
        const response = await EditorasRepository.deletarEditoraPorId(id)
        res.status(200).json(response)
      } catch (error) {
        res.status(404).json({ error: true, message: `Editora não encontrado para o ID ${id}` });
      }
    });
  }
}

export default EditorasController;
