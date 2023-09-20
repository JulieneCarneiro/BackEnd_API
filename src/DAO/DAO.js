import Database from "../database/Database.js";

class DAO{
    /**
     * INSERE DADOS
     * @param {string} query 
     * @param {Array<any>} data 
     */
    static inserir(query, data){
        return new Promise((resolve, reject)=>{
            Database.run(query, data, (error)=>{
                if(error){
                    console.log(error)
                    reject(error)
                }
                resolve({error:false})
            })
        })
    }

    /**
     * BUSCA DADOS
     * @param {string} query
     * @returns {any}
     */
    static buscar(query){
        return new Promise((resolve, reject)=>{
            Database.all(query, (error, rows)=>{
                if(error){
                    console.log(error)
                    reject(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    /**
     * BUSCA pelo ID
     * @param {string} query 
     * @param {id} id 
     * @returns {any}
     */
    static buscarPorId(query, id) {
        return new Promise((resolve, reject) => {
        Database.get(query, id, (error, row) => {
            if (error) {
                  console.error(error);
                  reject(error);
              } else {
                  resolve(row);
              }
          });
      });
    }


    /**
     * DELETA por ID
     * @param {string} query 
     * @param {id} id 
     * @returns {Promise<void>}
     */
    static deletarPorId(query, id) {
      return new Promise((resolve, reject) => {
          Database.run(query, id, function (error) {
              if (error) {
                  console.error(error);
                  reject(error);
              } else {
                  resolve();
              }
          });
      });
    }

    /**
     * UPDATE por ID
     * @param {string} query 
     * @param {string} id 
     * @returns {Promise<void>}
     */
    static atualizarPorId(query, id) {
      return new Promise((resolve, reject) => {
          Database.run(query, id, function (error) {
              if (error) {
                  console.error(error);
                  reject(error);
              } else {
                  resolve();
              }
          });
      });
    }

}

export default DAO;