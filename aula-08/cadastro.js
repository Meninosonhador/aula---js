
function Enviar(){
        let nome, telefone, email;
    
        nome = document.querySelector("#nome").value;
        telefone = document.querySelector("#telefone").value;
        email = document.querySelector("#email").value;
    
    console.log(nome);
    console.log(telefone);

    let lista = document.querySelector(".lista-clientes").innerHTML;
    console.log(lista);

    linhaCliente = "<tr><td>" + nome + "</td><td>" + telefone + "</td><td>" + email + "</td><tr>";

    document.querySelector(".lista-clientes").innerHTML += linhaCliente;

    LimparCampos();

    document.querySelector(".mensagem").innerHTML = "<em>Cliente cadastrado com sucesso</em>";
}

function LimparCampos(){
    document.querySelector("#nome").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#email").value = "";
}
