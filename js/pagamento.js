var usuario = localStorage.getItem('user'); // Pega a string do localstorage
var login = localStorage.getItem('loggedIndex'); //pega o indice de login da pessoa
usuario = JSON.parse(usuario); //passa a string que veio do localstorage e transforma em arquivo json

if (!usuario) {
    usuario = [];
}

function $(element) { //QUERIA PODER USAR JQUERY ;-;
    return document.querySelector(element).value;
}

function btn() {
    var pais = $("#inputPais");
    var estado = $("#inputEstado");
    var cidade = $("#inputCidade");
    var bairro = $("#inputBairro");
    var cep = $("#inputCep");
    var credito = $("#inputCredito");
    var validade = $("#inputValidade");
    var produtos;
    var preco;
    var pode = false;

    if (!login) {
        alert("Você precisa entrar em sua conta primeiramente");
        return;
    }
    if (!pais) {
        alert("Informe seu país");
        return;
    }
    if (!estado) {
        alert("Informe seu estado");
        return;
    }
    if (!cidade) {
        alert("Informe sua cidade");
        return;
    }
    if (!bairro) {
        alert("Informe seu bairro");
        return;
    }
    if (!cep) {
        alert("Informe seu CEP");
        return;
    }
    if (!credito) {
        alert("Informe o número do cartão de credito");
        return;
    }
    if (!validade) {
        alert("Informe a validade do cartão de credito");
        return;
    }

    for (var i = 0; i < usuario[login].carinho.lenght; i++) {
        for (var j = 0; j < produtos.lenght; j++) {
            if (usuario[login].carinho[i] == produtos[j].id) { // Soma os preços dos produtos que estão no carinho
                preco += carinho[i].preco;
            }
        }
    }

    pode = confirm("Preço a pagar: " + preco + "\nDeseja confirmar a compra?");

    if (pode) {
        alert("Compra efetuava com sucesso");
        usuario[login].endereco.pais = pais;
        usuario[login].endereco.estado = estado;
        usuario[login].endereco.cidade = cidade;
        usuario[login].endereco.bairro = bairro;
        usuario[login].endereco.cep = cep;
        usuario[login].endereco.pagamento = credito;
        usuario[login].endereco.pagamento = validade;
        localStorage.setItem('user', JSON.stringify(usuario));
        window.location.replace("Mostruario.html");
    } else {
        alert("Compra cancelada");
    }
}