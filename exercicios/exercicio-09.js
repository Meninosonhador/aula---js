let Salario = prompt("coloque o salário");
let Reajuste = prompt("coloque o Reajuste");

let Rp = Reajuste / 100;

let SalarioReajustado = Salario * Rp;

SalarioReajuste = parseFloat(SalarioReajustado);
Salario = parseFloat(Salario);

let porcentagem = SalarioReajustado + Salario;

document.write("O reajuste aumenta seu salário em " + SalarioReajustado + " reais, sendo agora de " + porcentagem + " reais.");



