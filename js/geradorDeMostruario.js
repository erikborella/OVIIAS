var produtos = JSON.parse(localStorage.getItem("produtos"));

//verifica se existe algum produto cadastrado
if (!produtos) {
    $(".conteudo", `<h1>Nenhum produto cadastrado</h1>`)
}
//se existir vai gerar um html com todos os produtos e suas informações
else {
    var content = ``;
    for (let i in produtos) {
        content += `
        <div class="row">
            <article class="col-6 col-s-12 des">
                <a onClick="selecProd(${produtos[i].id})"><img src="img/${produtos[i].dados.imgs}"></a>
                <div class="hmm">
                <a>${produtos[i].nome}</a>
                    <p class="descricaoContent">${produtos[i].dados.descricao}</p>
                    <h3 class="descricaoContent">${produtos[i].preco} R$</h3>
                </div
            </article>
        </div>
        <div class="comprar">
            <button onClick="addCarinho(${produtos[i].id})">Adicionar ao carrinho</button>
        </div>
        <br>
        <hr class="difff">
        `;
    }

    $(".conteudo", content);
}

// TODO: Essa função vai servir para poder dizer qual é o indice do produto selecionado para poder ser gerado posteriomente
function selecProd(id) {
    localStorage.setItem("idProdSelec", id);
    window.location.replace("UmProd.html");
}

function addCarinho(id) {
    var user = JSON.parse(localStorage.getItem("user"));
    var logIndex = localStorage.getItem("loggedIndex");

    if (!logIndex) { //verifica se tem alguem logado
        alert("Você precisa estar logado para adicionar um produto ao carinho");
    } 
    
    else {

        var bol_findProd = false;

        for (var i in user[logIndex].carinho) {
            if (id === user[logIndex].carinho[i].id) {
                bol_findProd = true;
                break;
            }
        }

        if (bol_findProd) {
            user[logIndex].carinho[i].quant++;
        }
        else {
            user[logIndex].carinho.push({
                "id": id,
                quant: 1
            })
        }
        alert("Adicionado no carinho com sucesso!")
        localStorage.setItem("user", JSON.stringify(user));

    }
}



//essa função serve para adicionar o html gerado na pagina
function $(element, value) {
    document.querySelector(element).innerHTML = value;
}