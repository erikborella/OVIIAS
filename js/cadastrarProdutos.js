//Essa função serve para adicionar produtos na key de produtos
function addProdutos(nome, tipo, id, estoque, preco, dados) {

    //Pega todos os produtos
    var prod = localStorage.getItem("produtos");

    //Se não existir produtos, declara um vetor vazio e adiciona o produto sem nenhuma verificação, pois é desnecessario
    if (!prod) {
        prod = [];
        prod.push({
            "nome": nome,
            "tipo": tipo,
            "id": id,
            "estoque": estoque,
            "preco": preço,
            "dados": dados
        })
    }
    else {
        
    }


}

