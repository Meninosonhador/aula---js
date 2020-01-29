let Usuario, numero1, numero2, total;
numero1 = prompt("Informe um número");
numero2 = prompt("Informe outro número");

Usuario = prompt("Escolha uma das opções: \n 1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

switch(Usuario) {
    case "1":
        total = numero1 + numero2;
        break;
    case "2":
        total = numero1 - numero2;
        break;
    case "3":
        total = numero1 * numero2;
        break;
    case "4":
        total = numero1 / numero2;
        break;
    default:
        document.write("Resposta Inválida");
        break;
}

document.write("O resultado é: " + total);