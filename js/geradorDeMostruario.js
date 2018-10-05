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
                <a onClick="selecProd(${i})"><img src="img/${produtos[i].dados.imgs}"></a>
                <div class="hmm">
                <a>${produtos[i].nome}</a>
                    <p class="descricaoContent">${produtos[i].dados.descricao}</p>
                </div>
            </article>
        </div>
        <div class="comprar">
            <button>Adicionar ao carrinho</button>
        </div>
        <br>
        <hr class="difff">
        `;
    }

    $(".conteudo", content);
}

// TODO: Essa função vai servir para poder dizer qual é o indice do produto selecionado para poder ser gerado posteriomente
function selecProd(index) {
    console.log(index);

}

//essa função serve para adicionar o html gerado na pagina
function $(element, value) {
    document.querySelector(element).innerHTML = value;
}