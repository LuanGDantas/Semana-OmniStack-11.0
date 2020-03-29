const genereteUniqueId = require('../utils/genereteUniqueId');
const connection = require('../database/connection');

// expota as funções de rotas
module.exports = {
  // abilito a função para ser assicrona pois a inserção deve ser finalizada para 
  // ser realizada outra tarefa
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  // abilito a função para ser assicrona pois a inserção deve ser finalizada para 
  // ser realizada outra tarefa de response
  async create(request, response) {
    //pega o corpo da reuisição
    const { name, email, whatsapp, city, uf } = request.body;

    //para criar o id
    // usamos essa ideia da propria documentação do node utilizando o crypto
    const id = genereteUniqueId();

    // inicia conecxão de insert, inserir dados na tabela vindo da requisição
    // possui 'await' para que ao realizar a tarefa espere ela terminar
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    //  devo retorna para o cliente sabe seu id 
    return response.json({ id });
  }
};