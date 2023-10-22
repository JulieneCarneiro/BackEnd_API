import Livros from "../models/Livros.js";
import Generos from "../models/Generos.js"
import RepositoryGeneral from "./RepositoryGeneral.js";

class LivrosRepository {
  static async inserirLivro(livro) {
    const response = await RepositoryGeneral.inserir(Livros, livro);
    return response;
  }

  static async buscarTodosOsLivros() {
    const result = await RepositoryGeneral.buscarTodos(Livros);
    return result;
  }
  
    static async buscarLivroPorTitulo(titulo) {
      const result = await RepositoryGeneral.buscarPorChave(Livros, "titulo", titulo);
      return result;
    }
  
    static async buscarLivroPorId(id) {
      const result = await RepositoryGeneral.buscarPorId(Livros, id);
      return result;
    }

    static async buscarLivroPorGenero(nome) {
        const result = await RepositoryGeneral.buscarPorChave(Generos, "nome", nome);
        return result;
      }
  
  static async deletarLivroPorId(id) {
    const result = await RepositoryGeneral.deletarPorId(Livros, id)
    return result;
  }

  static async atualizarLivroPorId(id, livro) {
    const result = await RepositoryGeneral.atualizarPorId(Livros, id, livro)
    return result;
  }

}

export default LivrosRepository;

