function VerResposta1(){
    // ALTERNATIVA 1
    let alternativa1 = document.querySelector("#pergunta1-resposta1").checked;
    if(alternativa1 == true){
        document.querySelector(".resposta1").innerHTML = "Boa 06!";
    }else{
        document.querySelector(".resposta1").innerHTML = "Errou Feio Errou Rude!!";
    }


}

function VerResposta2(){
    //ALTERNATIVA 2
    let alternativa2 = document.querySelector("#pergunta2-resposta2").checked;
    if(alternativa2 == true){
        document.querySelector(".resposta2").innerHTML = "Boa 06!";
    }else{
        document.querySelector(".resposta2").innerHTML = "Errou Feio Errou Rude!!";
    }
}