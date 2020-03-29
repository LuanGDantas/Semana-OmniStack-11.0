// escolhemos uma cartegoria para cada test já que pode teve vario nesse mesmo arquibo
// se utilizar a função de it, devido nossos testes geramente se escrito no formato de uam frase com significado
//no it há descrição e a função de teste utilizando o expect(espera que algo aconteça) importado pelo jest

// importamos a biblioteca que vai realizar as  conexões com a API supertest

const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    // execurta a criação de tabela via code
    await connection.migrate.latest();
  });

  afterAll(async () => {
    // é bom sempre dedsfazer as migrate, exclui as tabelas criadas anteriomente
    await connection.migrate.rollback();
    await connection.destroy();
  });

  //para seta algo do cabeçalho .set('Authorization', id')
  it ('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "AA",
        email: "contato@gmail.com",
        whatsapp: "6132649922",
        city: "Pau dos Ferros",
        uf: "RN"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
