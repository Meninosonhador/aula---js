/* JO KEN PO */
let nomejogador1, nomejogador2;
let opcaojogador1, opcaojogador2;

nomejogador1 = prompt("Informe o nome do jogador1:");
opcaojogador1 = prompt("Olá " + nomejogador1 + " , escolha uma das opções: \n 1 - pedra \n 2 - papel \n 3 tesoura");

nomejogador2 = prompt("Informe o nome do jogador2:");
opcaojogador2 = prompt("Olá " + nomejogador2 + " , escolha uma das opções: \n 1 - pedra \n 2 - papel \n 3 tesoura");

if(opcaojogador1 == 1){
    document.write("<img src='imagens/pedra.png'>");
}else if(opcaojogador1 == 2){

}else if(opcaojogador1 == 3)

if(opcaojogador1 == 2){
    document.write("<img src='imagens/papel.png'>");
}else if(opcaojogador1 == 1){

}else if(opcaojogador1 == 3)


if(opcaojogador1 == opcaojogador2){
    document.write(" EMPATE");
}

else if(opcaojogador1 == 1 && opcaojogador2 == 3){
    document.write( nomejogador1 + " VENCEU");
    document.write("<img src='imagens/pedra.png'>");
}

else if(opcaojogador1 == 2 && opcaojogador2 == 1){
    document.write(nomejogador1 + " VENCEU")
    document.write("<img src='imagens/papel.png'>");
}

else if(opcaojogador1 == 3 && opcaojogador2 == 2){
    document.write( nomejogador1 + " VENCEU")
    document.write("<img src='imagens/tesoura.png'>");
}

else if(opcaojogador2 == 1 && opcaojogador1 == 3){
    document.write(nomejogador2 + " VENCEU")
    document.write("<img src='imagens/pedra.png'>");
}

else if(opcaojogador2 == 2 && opcaojogador1 == 1){
    document.write(nomejogador2 + " VENCEU")
    document.write("<img src='imagens/papel.png'>");
}

else if(opcaojogador2 == 3 && opcaojogador1 == 2){
    document.write(nomejogador2 + " VENCEU")
    document.write("<img src='imagens/tesoura.png'>");
}
