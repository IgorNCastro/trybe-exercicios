let { randomNumber } = require('./service');
const service = require("./service");

describe("Conjunto de testes do dia 14.2 - Front-End", () => {

  test("Se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    randomNumber = jest.fn().mockReturnValue(10);
    
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
  
  test("Se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
    expect(randomNumber(100, 5)).toBe(20);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(100, 5);
  });
  
  test("Se a função retorna a multiplicacao dos parametros e depois o dobro de um unico parametro", () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  
    expect(randomNumber(2, 5, 10)).toBe(100);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledWith(2, 5, 10);
  });

  test("Se a função retorna o dobro de um unico parametro", () => {
    randomNumber.mockReset();
    expect(randomNumber).toHaveBeenCalledTimes(0);
  
    randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
  
    expect(randomNumber(25)).toBe(50);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(25);
  });

  test("Se apos mockar, a função recebe um parâmetro e retorna em caixa baixa ao inves de alta", () => {
    const mockFirstFunction = jest.spyOn(service, "firstFunction" ).mockImplementation(a => a.toLowerCase());

    expect(mockFirstFunction("TRYBE")).toBe("trybe");
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
    expect(service.firstFunction).toHaveBeenCalledWith("TRYBE");
  });

  test("Se apos mockar, a função recebe um parâmetro e retorna a última letra ao inves da primeira", () => {
    const mockSecondFunction = jest.spyOn(service, "secondFunction").mockImplementation(a => a.charAt(a.length - 1));

    expect(mockSecondFunction("frontend")).toBe("d");
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
    expect(service.secondFunction).toHaveBeenCalledWith("frontend");
  });

  test("Se apos mockar, a função recebe 3 parâmetros e os concatena ao inves de 2", () => {
    const mockThirdFunction = jest.spyOn(service, "thirdFunction").mockImplementation((a, b, c) => a.concat(b, c));

    expect(mockThirdFunction("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });

  test("S apos restaurar a primeira função, verifica se ela retorna em caixa alta", () => {
    service.firstFunction.mockRestore();

    expect(service.firstFunction("trybe")).toBe("TRYBE");
  })

});
