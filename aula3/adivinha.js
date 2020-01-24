let numerojogador, numerocomputador

console.log(numerocomputador);
numerocomputador = Math.floor(Math.random(0,1) * 10);

numerojogador = prompt("tente adivinhar o número de 0 á 9");

if(numerocomputador == numerojogador){
    document.write("Você ganhou!");
    document.write("<br>");
    document.write("<img src='imagens/feliz.png'>");
}else{
    document.write("Você perdeu!");
    document.write("<br>");
    document.write("<img src='imagens/triste.png'>");
}

