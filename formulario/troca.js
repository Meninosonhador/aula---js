function Trocar(){
    let nome, sobrenome;

    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;



    document.getElementById("sobrenome").value = nome;

    document.getElementById("nome").value = sobrenome;
}