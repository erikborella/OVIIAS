var pId = Number(localStorage.getItem("idProdSelec"));
var prods = JSON.parse(localStorage.getItem("produtos"));

//verica se o id existe
if (pId <= prods.length) {

    var html = ` <div class="row">
                    <article class="col-6 col-s-12 des2">
                        <a onClick=""><img src="${prods[pId].dados.imgs}"></a>
                        <div class="hmm">
                            <a>${prods[pId].nome}</a>
                            <p class="descricaoContent">${prods[pId].dados.descricao}</p>
                        </div>
                    </article>
                    </div>
                    
                    <div class="comprar">
                        <button onClick="addCarinho(${pId})">Adicionar ao carrinho</button>
                    </div>
                    <br>
                    <hr class="difff">`;
    document.querySelector("#titulo")
    document.querySelector("#content").innerHTML = html;

}

function addCarinho(id) {
    var user = JSON.parse(localStorage.getItem("user"));
    var logIndex = localStorage.getItem("loggedIndex");

    if (!logIndex) { //verifica se tem alguem logado
        alert("Você precisa estar logado para adicionar um produto ao carinho");
    } else {

        var bol_findProd = false;

        for (var i in user[logIndex].carinho) {
            if (id === user[logIndex].carinho[i].id) {
                bol_findProd = true;
                break;
            }
        }

        if (bol_findProd) {
            user[logIndex].carinho[i].quant++;
        } else {
            user[logIndex].carinho.push({
                "id": id,
                quant: 1
            })
        }

        localStorage.setItem("user", JSON.stringify(user));

    }
}