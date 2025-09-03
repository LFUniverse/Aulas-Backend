const calcularMediaAluno = require ('../src/calcularMediaAluno.js');

test("Validando notas A1 e A2", function() {
    expect (calcularMediaAluno.Calculo).toBeDefined();
    expect (() => calcularMediaAluno.Calculo(undefined,undefined)) .toThrow("Notas A1 ou A2 não informadas");
})

test("Verificando se as notas estão negativas", function() {
    expect (calcularMediaAluno.Calculo).toBeDefined();
    expect (() => calcularMediaAluno.Calculo(-1,4)) .toThrow("Notas a1 ou a2 não podem ser negativas");
})

test("Media da notas A1 e A2", function() {
    expect (calcularMediaAluno.Calculo).toBeDefined();
    expect (calcularMediaAluno.Calculo(2,4,undefined)) .toBeCloseTo(3.2);
})

test("Verificando se a nota A3 é negativo", function() {
    expect (calcularMediaAluno.Calculo).toBeDefined();
    expect (() => calcularMediaAluno.Calculo( 5,3,-5)) .toThrow("Nota a3 não pode ser negativa");
})

test("quando a3 é informada e a melhor combinação é a1 + a3", function () {
    expect (calcularMediaAluno.Calculo).toBeDefined();
    expect (calcularMediaAluno.Calculo(9, 5, 10)) .toBeCloseTo(9.6);
});

test("quando a3 é informada e a melhor combinação é a2 + a3", function () {
    expect (calcularMediaAluno.Calculo).toBeDefined();
    expect (calcularMediaAluno.Calculo(5, 9, 10)) .toBeCloseTo(9.6);
});