import Clientes from "../models/Clientes.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class ClientesRepository {
  static async inserirCliente(cliente) {
    const response = await RepositoryGeneral.inserir(Clientes, cliente);
    return response;
  }

  static async buscarTodosOsClientes() {
    const result = await RepositoryGeneral.buscarTodos(Clientes);
    return result;
  }

  static async buscarClientePorId(id) {
    const result = await RepositoryGeneral.buscarPorId(Clientes, id);
    return result;
  }

  static async buscarClientePorNome(nome) {
    const result = await RepositoryGeneral.buscarPorNome(Clientes, nome);
    return result;
  }

  static async deletarClientePorId(id) {
    const result = await RepositoryGeneral.deletarPorId(Clientes, id)
    return result;
  }

  static async atualizarClientePorId(id, cliente) {
    const result = await RepositoryGeneral.atualizarPorId(Clientes, id, cliente)
    return result;
  }
}

export default ClientesRepository;
