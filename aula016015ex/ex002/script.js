var num = document.getElementById("num")
var lista = document.querySelector("select#add")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert ('Valor invalido ou ja encontra-se na lista.')
    }
}
function finalizar() {
    res.innerHTML `Ao todo, temos ${num.value.length + 1} cadastrados.`
}


