import mongoose from "mongoose";

class RepositoryGeneral {
  static async inserir(EntidadeMongo, input) {
    await EntidadeMongo.create(input);
    return { Sucesso: "Registro inserido com sucesso" };
  }

  static async buscarTodos(EntidadeMongo) {
    const response = await EntidadeMongo.find();
    return response;
  }

  static async buscarPorId(EntidadeMongo, id) {
    const response = await EntidadeMongo.find({ _id: id });
    return response;
  }

  static async buscarPorChave(EntidadeMongo, chave, value) {
    const result = await EntidadeMongo.findOne({ [chave]: value });
    return result;
  }

  static async deletarPorId(EntidadeMongo, id) {
    await EntidadeMongo.findOneAndDelete({ _id: id });
    return { Message: "Registo deletado com sucesso", id };
  }

  static async atualizarPorId(EntidadeMongo, id, input) {
    await EntidadeMongo.updateOne({ _id: id }, input);
    return { Message: "Registo atualizado com sucesso", id };
  }
}

export default RepositoryGeneral;
