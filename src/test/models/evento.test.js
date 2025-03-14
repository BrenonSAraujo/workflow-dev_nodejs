import {
    describe, expect, it,
  } from '@jest/globals';

  import Evento from '../../models/eventos.js';

  describe('Testando o modelo Evento', () => {
    const objetoEvento = {
      nome: 'Evento Teste',
      descricao: 'Descricao do evento teste',
      data: '2023-01-01',
      autorId: 1
    };
  
    it('Deve instanciar um novo evento', () => {
      const evento = new Evento(objetoEvento);
  
      expect(evento).toEqual(
        expect.objectContaining(objetoEvento),
      );
    });
});