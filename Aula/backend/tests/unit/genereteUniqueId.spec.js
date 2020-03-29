// escolhemos uma cartegoria para cada test já que pode teve vario nesse mesmo arquibo
// se utilizar a função de it, devido nossos testes geramente se escrito no formato de uam frase com significado
//no it há descrição e a função de teste utilizando o expect(espera que algo aconteça) importado pelo jest

// importamos a função
const generateUniqueId = require('../../src/utils/genereteUniqueId')

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId();

    //o to.. é obtido na doc
    expect(id).toHaveLength(8);
  });
});

// para exercuta:  npm test