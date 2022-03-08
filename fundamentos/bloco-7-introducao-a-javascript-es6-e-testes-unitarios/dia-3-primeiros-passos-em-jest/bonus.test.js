const searchEmployee = require('./bonus.js');

describe('Testa a função searchEmployee', () => {

  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se a função searchEmployee lança um erro quando os parâmetros estão errados', () => {
    expect(() => { searchEmployee('8579-0', 'specialities') }).toThrow();
    expect(() => { searchEmployee('8579-6', 'nickname') }).toThrow();
  });

  it('Testa se a mensagem de erro é "ID não identificada" quando o primeiro parametro não é encontrado no objeto', () => {
    expect(() => { searchEmployee('8579-0', 'specialities') }).toThrowError(new Error('ID não identificada'));
  });

  it('Testa se a mensagem de erro é "Informação indisponível" quando o segundo parametro não é encontrado no objeto', () => {
    expect(() => { searchEmployee('8579-6', 'nickname') }).toThrowError(new Error('Informação indisponível'));
  });

  it('Testa se o retorno de searchEmployee("5569-4", "lastName") é { id: "5569-4", info: "Jobs" }', () => {
    expect(searchEmployee('5569-4', 'lastName')).toEqual({"id": "5569-4", "info": "Jobs"});
  });
  
  it('Testa se o retorno de searchEmployee("4456-4", "firstName") é { id: "4456-4", info: "Leila" }', () => {
    expect(searchEmployee('4456-4', 'firstName')).toEqual({"id": "4456-4", "info": "Leila"});
  });

  it('Testa se o retorno de searchEmployee("5569-4", "specialities") é { id: "5569-4", info: "[ Frontend, Redux, React, CSS ]" }', () => {
    expect(searchEmployee('5569-4', 'specialities')).toEqual({"id": "5569-4", "info": [ "Frontend", "Redux", "React", "CSS" ]});
  });

});