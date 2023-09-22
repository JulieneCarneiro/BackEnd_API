import Livros from "../models/Livros.js";
import LivrosDAO from "../DAO/LivrosDAO.js";
import ValidacaoServicesLivros from "../services/LivrosServices.js";

class LivrosController {
  /**
   *
   * @param {Express} app
   */
  static rotas(app) {
    /**
     * BUSCA TODOS os LIVROS
     */
    app.get("/livros", async (req, res) => {
      try {
        const livros = await LivrosDAO.buscarTodosOsLivros();
        res.status(200).json(livros);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            error: true,
            message: "Nenhum livro encontrado", //mas dai aqui tem q ter outra msg
            details: error.message, // detalhes do erro?? pensar nisso!!!!!!!!
          });
        } else {
          res.status(500).json({
            error: true,
            message: "Ocorreu um erro ao buscar os livros.",
          });
        }
      }
    });

    /**
     * BUSCA LIVROS por ID  FEITO
     */
    app.get("/livros/:id", async (req, res) => {
      const id = req.params.id;
      // verifica se o livro com o ID existe
      const isValid = await ValidacaoServicesLivros.validarExistenciaLivro(id);
      if (isValid) {
        // se o livro existe, executa a busca
        const resposta = await LivrosDAO.buscarLivroPorId(id);
        if (resposta) {
          // se encontrar o livro, retorna os dados dele
          res.status(200).json(resposta);
        } else {
          // se não encontrar o livro (caso inesperado), retorna um erro 500
          res.status(500).json({
            error: true,
            message: `Ocorreu um erro ao buscar o livro com o ID ${id}`,
          });
        }
      } else {
        // se o livro não existe, retorna um erro 404
        res
          .status(404)
          .json({
            error: true,
            message: `Livro não encontrado para o ID ${id}`,
          });
      }
    });

    /**
     * BUSCA pelo genero                        ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
     */
    app.get("/livros/genero/:genero", async (req, res) => {
      const genero = req.params.genero;
      const resposta = await LivrosDAO.buscarLivrosPorGenero(genero);
      if (resposta) {
        res.status(200).json(resposta);
      } else {
        res.status(404).json({
          error: true,
          message: `Não encontramos livros no gênero ${genero}`,
        });
      }
    });
    /**
     * BUSCA pelo autor                        ///////////SEM VALIDAÇÃO TA FUNCIONANDOOOOOOOOOOOOO
     */
    app.get("/livros/autor/:autor", async (req, res) => {
      const genero = req.params.genero;
      const resposta = await LivrosDAO.buscarLivrosPorGenero(genero);
      if (resposta) {
        res.status(200).json(resposta);
      } else {
        res.status(404).json({
          error: true,
          message: `Não encontramos livros no gênero ${genero}`,
        });
      }
    });

    /**
     * DELETA por ID                      ///////////SEM VALIDAÇÃO TA FUNCIONANDO --- MAS DA PRA MELHORAR A RESPOSTA
     */
    app.delete("/livros/:id", async (req, res) => {
      const id = req.params.id;
      LivrosDAO.deletarLivroPorId(id);
      res
        .status(200)
        .json({ error: false, message: `Livro excluído com sucesso!` });
    });

    /**
     * INSERE
     */
    app.post("/livros", async (req, res) => {
      const body = req.body;

      if (!ValidacaoServicesLivros.validaCamposLivro(body.TITULO, body.PRECO)) {
        return res
          .status(400)
          .json({ error: true, message: `Campos inválidos` });
      }
      try {
        const isValid = await ValidacaoServicesLivros.validarExistenciaLivro(
          body.ID
        );
        if (isValid) {
          const novoLivro = new Livros(
            body.ID,
            body.TITULO,
            body.PRECO,
            body.AUTOR,
            body.GENERO,
            body.EDITORA,
            body.IDIOMA
          );
          await LivrosDAO.inserirLivro(novoLivro);
          res.status(201).json({
            message: "Livro criado com sucesso!",
          });
        } else {
          res
            .status(400)
            .json({ error: true, message: `Livro não encontrado` });
        }
      } catch (error) {
        console.error("Erro no servidor:", error);
        res
          .status(503)
          .json({ error: true, message: `Servidor indisponível no momento` });
      }
    });

    // /**
    //  * ATUALIZA por ID                        //NÃO SEI COMO ISSO FUNCIONA LALALALALALALLALAALALALALA
    //  */

    /**
     * ATUALIZA TUDO pelo ID
     */
    app.put("/livros/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      const exists = await ValidacaoServicesLivros.validarExistenciaLivro(id);
      const isValid = ValidacaoServicesLivros.validaCamposLivro(
        body.TITULO,
        body.PRECO,
        body.GENERO,
        body.IDIOMA
      );
      if (exists) {
        if (isValid) {
          const livroAtualizado = {
            TITULO: body.TITULO,
            PRECO: body.PRECO,
            AUTOR: body.AUTOR,
            GENERO: body.GENERO,
            EDITORA: body.EDITORA,
            IDIOMA: body.IDIOMA,
          };
          await LivrosDAO.atualizarLivroPorId(id, livroAtualizado);
          res
            .status(204)
            .json({ error: false, message: `Livro atualizado com sucesso!` });
        } else {
          res.status(400).json({ error: true, message: `Campos inválidos` });
        }
      } else {
        res
          .status(404)
          .json({
            error: true,
            message: `Livro não encontrado para o ID ${id}`,
          });
      }
    });

    app.patch("/livros/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;

      try {
        // Verifique se o livro existe
        const livroExistente = await LivrosDAO.buscarLivroPorId(id);

        if (!livroExistente) {
          return res
            .status(404)
            .json({
              error: true,
              message: `Livro não encontrado para o id ${id}`,
            });
        }

        // Valide os campos fornecidos na solicitação
        if (
          !ValidacaoServicesLivros.validaCamposLivro(body.TITULO, body.PRECO)
        ) {
          return res
            .status(400)
            .json({ error: true, message: `Campos inválidos` });
        }

        // Atualize apenas as propriedades fornecidas na solicitação
        if (body.TITULO) {
          livroExistente.TITULO = body.TITULO;
        }
        if (body.PRECO) {
          livroExistente.PRECO = body.PRECO;
        }

        // Salve as alterações no banco de dados
        await LivrosDAO.atualizarLivroPorId(id, livroExistente);

        res.status(204).json();
      } catch (error) {
        console.error(error);
        res
          .status(503)
          .json({ error: true, message: `Servidor indisponível no momento` });
      }
    });
  }
}

export default LivrosController;
