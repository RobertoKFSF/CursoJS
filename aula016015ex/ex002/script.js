var num = document.getElementById("num")
var add = document.querySelector("add")
let fim = document.querySelector("fim")
let valores = []

function isNumero(n) {
        if (isNumero(num.value) < 0 && isNumero(num.value > 100)) {
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
    if (num >= 0) {
        valores.push(num.value)
        var n = Number(num.value)
        let c = 1
        let item = document.createElement('option')
        item.text = `O valor adicionado foi ${num}`
        add.appendChild(item)
        c++
    }
}
