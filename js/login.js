var usuario = localStorage.getItem('user'); // Pega a string do localstorage
usuario = JSON.parse(usuario); //passa a string que veio do localstorage e transforma em arquivo json

if (!usuario) {
    usuario = [];
}

function btn() {
    var username = $("#inputUsername");
    var senha = $("#inputPassword");
    var pode = false;

    for (var i = 0; i < usuario.length; i++) {
        if (usuario[i].user === username && usuario[i].senha === senha) {
            pode = true;
            alert("Parabéns");
            break;
        }
    }
    if (!pode) {
        alert("Dados Incorretos")
    }
}


function $(element) { //QUERIA PODER USAR JQUERY ;-;
    return document.querySelector(element).value;
}