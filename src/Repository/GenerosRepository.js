import Generos from "../models/Generos.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class GenerosRepository {
  static async inserirGenero(genero) {
    const response = await RepositoryGeneral.inserir(Generos, genero);
    return response;
  }

  static async buscarTodosOsGeneros() {
    const result = await RepositoryGeneral.buscar(Generos);
    return result;
  }
  
    static async buscarGeneroPorNome(nome) {
      const result = await RepositoryGeneral.buscarPorChave(Generos, "nome", nome);
      return result;
    }
  
    static async buscarGeneroPorId(id) {
      const result = await RepositoryGeneral.buscarPorId(Generos, id);
      return result;
    }
  
  static async deletarGeneroPorId(id) {
    const result = await RepositoryGeneral.deletarPorId(Generos, id)
    return result;
  }

  static async atualizarGeneroPorId(id, genero) {
    const result = await RepositoryGeneral.atualizarPorId(Generos, id, genero)
    return result;
  }

}

export default GenerosRepository;
