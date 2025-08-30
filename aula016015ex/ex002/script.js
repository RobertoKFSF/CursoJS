var num = document.getElementById("input#num")
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

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
    
    } else {
        alert ("Valor invalido ou ja encontra-se na lista.")
    }
}


if (num >= 0) {
    valores.push(num.value)
    var n = Number(num.value)
    let c = 1
    let item = document.createElement('option')
    item.text = `O valor adicionado foi ${num}`
    add.appendChild(item)
    c++ }