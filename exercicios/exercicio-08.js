let C = prompt("Insira a capital");
let i = prompt("coloque a taxa de empréstimo");
let n = prompt("coloque o período do emprestimo");

let imp = i / 100;

let J = C * imp * n

document.write("O preço do juros é de " + J + " reais.")