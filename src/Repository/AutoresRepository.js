import Autores from "../models/Autores.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class AutoresRepository {
  static async inserirAutor(autor) {
    const response = await RepositoryGeneral.inserir(Autores, autor);
    return response;
  }

  static async buscarTodosOsAutores() {
    const result = await RepositoryGeneral.buscar(Autores);
    return result;
  }
  
    static async buscarAutorPorNome(nome) {
      const result = await RepositoryGeneral.buscarPorChave(Autores, "nome", nome);
      return result;
    }
  
    static async buscarAutorPorId(id) {
      const result = await RepositoryGeneral.buscarPorId(Autores, id);
      return result;
    }
  
  static async deletarAutorPorId(id) {
    const result = await RepositoryGeneral.deletarPorId(Autores, id)
    return result;
  }

  static async atualizarAutorPorId(id, autor) {
    const result = await RepositoryGeneral.atualizarPorId(Autores, id, autor)
    return result;
  }

}

export default AutoresRepository;
