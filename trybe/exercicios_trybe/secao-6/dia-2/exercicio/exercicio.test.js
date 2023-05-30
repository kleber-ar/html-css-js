
const removeItem = require("./exercicio")

describe('testa a função removeItem', () => {
    it('retorna array removendo o item correto', () => {
      expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
      expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
        
    });
});