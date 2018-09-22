var produtos = JSON.parse(localStorage.getItem("produtos"));

if (!produtos) {
    $(".conteudo", `<h1>Nenhum produto cadastrado</h1>`)
}
else {
    var content;
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
        <hr>`;
    }

    $(".conteudo", content);
}

function selecProd(index) {
    console.log(index);
    
}





function $(element, value) {
    document.querySelector(element).innerHTML = value;
}