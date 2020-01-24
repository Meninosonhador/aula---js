let cliente, resposta;

document.write("<ul>");
resposta = true;

while(resposta == true){ //while só carrega se for verdadeiro = true
    cliente = prompt("nome do cliente");
    document.write("<li>" + cliente + "</li>");
    resposta = confirm("Cadastrar outro cliente?");
}

document.write("</ul>");


let contador = 1;
while(contador <= 10){
    document.write("Número " + contador);
    

    if(contador == 5){
        document.write(" Aqui é a metade");
        
    }
    
    document.write("<br>");

    contador = contador + 1; //contador++ ou contador--
}