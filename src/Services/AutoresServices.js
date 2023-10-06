
import AutoresRepository from "../Repository/AutoresRepository.js";
// import LivrosRepository from "../Repository/LivrosRepository.js";

class AutoresServices {

  static async validaNome(nome) {
    const autor = await AutoresRepository.buscarAutorPorNome(nome);
    if (!autor && nome.length > 2) {
      return true;
    } else {
      throw new Error("Autor já cadastrado.");
    }
  }


  static validaPais(pais) {
    if (typeof pais == "string" && pais.length > 2){
      return true
    }
    throw new Error("País inválido")
  }


  // static async validarExistenciaLivro(id) {
  //   const livro = await LivrosRepository.buscarLivroPorId(id);
  //   if (!livro) {
  //     return true;
  //   } else {
  //     throw new Error("Livro já cadastrado")
  //   }
  // }


  static async validaCamposAutor( nome, pais) {
   try {
    await AutoresServices.validaNome(nome)
    AutoresServices.validaPais(pais) 
    // await AutoresServices.validarExistenciaLivro(id);
    
   } catch (error) {
    throw error
   }
  }
}

export default AutoresServices;
