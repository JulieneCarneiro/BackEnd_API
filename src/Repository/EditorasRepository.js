import Editoras from "../models/Editoras.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class EditorasRepository {
  static async inserirEditora(editora) {
    const response = await RepositoryGeneral.inserir(Editoras, editora);
    return response;
  }

  static async buscarTodasAsEditoras() {
    const result = await RepositoryGeneral.buscar(Editoras);
    return result;
  }
  
    static async buscarEditoraPorNome(nome) {
      const result = await RepositoryGeneral.buscarPorChave(Editoras, "nome", nome);
      return result;
    }
  
    static async buscarEditoraPorId(id) {
      const result = await RepositoryGeneral.buscarPorId(Editoras, id);
      return result;
    }
  
  static async deletarEditoraPorId(id) {
    const result = await RepositoryGeneral.deletarPorId(Editoras, id)
    return result;
  }

  static async atualizarEditoraPorId(id, editora) {
    const result = await RepositoryGeneral.atualizarPorId(Editoras, id, editora)
    return result;
  }

}

export default EditorasRepository;
