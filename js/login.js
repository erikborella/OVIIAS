var usuario = localStorage.getItem('user'); // Pega a string do localstorage
usuario = JSON.parse(usuario); //passa a string que veio do localstorage e transforma em arquivo json

if (!usuario) {
    usuario = [];
}

function btn() {
    var username = $("#inputUsername");
    var senha = $("#inputPassword"); //pega os valores de input
    var pode = false; 

    if(!username){
        alert("Informe seu nome de usuário");
        return;
    }
    if(!senha){
        alert("Informe sua senha");
        return;
    }

    for (var i = 0; i < usuario.length; i++) {
        if (usuario[i].user === username && usuario[i].senha === senha) {  // faz a verificação pra ver se o usuário existe 
            pode = true;
            alert("Parabéns");
            localStorage.setItem('loggedIndex', ''+i);
            window.location.replace("Mostruario.html"); //redireciona a página para o mostruario
            break;
        }
    }
    if (!pode) {
        alert("Dados Incorretos")
    }

}


function $(element) { //QUERIA PODER USAR JQUERY ;-;
    try {
        return document.querySelector(element).value;
    }
    catch (e){
        console.error("elemento não encontrado");
    }
}