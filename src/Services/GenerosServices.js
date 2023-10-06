import GenerosRepository from "../Repository/GenerosRepository.js";

class GenerosServices {
    static async validaNome(nome) {
        const genero = await GenerosRepository.buscarGeneroPorNome(nome);
        if (!genero && nome.length > 2) {
          return true;
        } else {
          throw new Error("Genero já cadastrado.");
        }
      }

      static async validaCamposGenero( nome) {
        try {
         await AutoresServices.validaNome(nome)
        } catch (error) {
         throw error
        }
       }
}
export default GenerosServices;
