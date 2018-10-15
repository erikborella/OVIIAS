var produtos = JSON.parse(localStorage.getItem("produtos"));

var prop =  "";
for (var i = 0; i < produtos.length && i < 4; i++) {
    prop += `<img src="img/${produtos[i].dados.imgs}" style="width:200px; height: 200px;">`;
}

document.getElementById("produtos").innerHTML = prop;