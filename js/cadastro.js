var usuario = localStorage.getItem('user'); // Pega a string do localstorage
usuario = JSON.parse(usuario); //passa a string que veio do localstorage e transforma em arquivo json

if (!usuario) {
    usuario = [];
}

function btn() {

    var nome = $("#inputNome");
    var sobrenome = $("#inputSobrenome");
    var user = $("#inputUser");
    var password = $("#inputSenha");
    var email = $("#inputEmail");
    var pode = true;
    var boOrobo = !true;

    if(!nome){
        alert("Informe seu nome");
        return;
    }
    if(!sobrenome){
        alert("Informe seu sobrenome");
        return;
    }
    if(!user){
        alert("Informe seu nome de usuário");
        return;
    }
    if(!password){
        alert("Informe sua senha");
        return;
    }
    if(!email){
        alert("Informe seu email");
        return;
    }
    
    var robo = prompt('Digite exatamente "NÃO SOU UM ROBÔ"');
    boOrobo = robo === "NÃO SOU UM ROBÔ"; //Verifica se a pessoa é ou não um robo

    if (!boOrobo) { // se pessoa == robo então pessoa é robo

        alert("Voce eh um robo");

    } else {

        for (var i = 0; i < usuario.length; i++) {
            if (usuario[i].user === user) {
                pode = false;
                alert("Este Username já existe"); // verifica se ja tem um usuario com o nome do input
                break;
            }
        }
        for (var i = 0; i < usuario.length; i++) {
            if (usuario[i].email === email) {
                pode = false;
                alert("Este Email já existe"); // verifica se ja tem um usuário c o mesmo email
                break;
            }
        }

        if (pode) {
            usuario.push({
                'nome': nome,
                'sobrenome': sobrenome,
                'user': user,
                'senha': password,
                'email': email,
                'endereco': {
                    'cidade': '',
                    'estado': '',
                    'pais': '',
                    'CEP': '',
                    'bairro': '',
                    'numero': ''
                },
                'pagamento':{
                    'cartaoDeCredito': '',
                    'validade' : ''
                },
                'carinho': [
                    {
                        'id': '',
                        'quant': ''
                    }
                ],
                'idSelect': ''
            });
            alert("Parabains");
            localStorage.setItem('user', JSON.stringify(usuario)); //envia o json pro localstorage
        }

    }


}
function $(element) { //QUERIA PODER USAR JQUERY ;-;
    try {
        return document.querySelector(element).value;
    }
    catch {
        console.error("elemento não encontrado");
    }
}
