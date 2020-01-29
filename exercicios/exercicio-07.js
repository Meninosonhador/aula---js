let CustoFabrica = prompt("Custo de fabrica");
let PercentualDistribuidor = 28 / 100;
let PercentualImpostos = 45 / 100;

CustoFabrica = parseFloat(CustoFabrica);

let fabricação = CustoFabrica * PercentualDistribuidor;
let distribuição = CustoFabrica * PercentualImpostos;

let CustoTotal = CustoFabrica + fabricação + distribuição;

document.write("O Custo vai ser " + CustoTotal );