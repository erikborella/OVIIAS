var lIndex = JSON.parse(localStorage.getItem("loggedIndex"));
var user = JSON.parse(localStorage.getItem("user"));
var prod = JSON.parse(localStorage.getItem("produtos"));

var $ = (el) => document.querySelector(el);
var $ = (el, val) => document.querySelector(el).innerHTML = val;

if (lIndex === null) {
    alert("Voce deve estar logado para acessar o carinho");
    window.location.replace("Login.html")
}

gerate();

function gerate() {
    if (user[lIndex].carinho.lenght === 0) {
        $("#customers", "<h1>Nenhum produto no carinho</h1>");
    } else {
        var totalP = 0;
        var prop = `<table id="customers">
        <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
        </tr>`;

        for (let i in user[lIndex].carinho) {

            let produto = prod[user[lIndex].carinho[i].id];
            prop += `
            <tr>
                <td>${produto.nome}</td>
                <td><input data-carIndex="${i}" type="number" max="${produto.estoque}" min="0" class="quantChange" value="${user[lIndex].carinho[i].quant}" style="width:30%;"></td>
                <td>R$${user[lIndex].carinho[i].quant * produto.preco}</td>
            </tr>
            `

            totalP += user[lIndex].carinho[i].quant * produto.preco;
        }

        $("#toGer", prop + "</table>");

        $("#precoTotal", `Preço total: ${totalP} R$`)

        
        var allClassTD = document.getElementsByClassName("quantChange");
        
        for (let ind = 0; ind < allClassTD.length; ind++) {
            
            allClassTD[ind].addEventListener("change", () => {
                
                for (let i = 0; i < allClassTD.length; i++) {
                    
                    let index = allClassTD[i].attributes[0].value;
                    
                    user[lIndex].carinho[index].quant = allClassTD[i].value;
                    
                }
                
                localStorage.setItem("user", JSON.stringify(user));
                
                gerate();
            })
        }
    }


}

function buy(pass) {
    if (pass === user[lIndex].senha) {
        alert("Redirecionando para a página de pagamento");
        window.location.replace("Pagamento.html");
    }
}

