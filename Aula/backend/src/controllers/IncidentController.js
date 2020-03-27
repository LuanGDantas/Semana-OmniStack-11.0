const connection = require('../database/connection');

// expota as funções de rotas
module.exports = {
  async index(request, response) {
    const {page = 1} = request.query; 

    const [ count ] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incidents.*',
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf']);

// passa a quantidade de casos da org pelo cabeçalho do response
    response.header('X-Total-Count', count['count(*)']);
    
    return response.json(incidents);
  },
  // abilito a função para ser assicrona pois a inserção deve ser finalizada para 
  // ser realizada outra tarefa de response
  async create(request, response) {
    //pega o corpo da reuisição
    const { title, description, value } = request.body;
    // atribui o valor de auteticação do usuario
    const ong_id = request.headers.authorization;

    // inicia conecxão de insert, inserir dados na tabela vindo da requisição
    // possui 'await' para que ao realizar a tarefa espere ela terminar e ja 
    // captura o valor do id
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    //  retorna para o cliente sabe seu id 
    return response.json({ id });
  },

  async delete(request, response){
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();
    
    if(incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id). delete();

    return response.status(204).send();
  }
};