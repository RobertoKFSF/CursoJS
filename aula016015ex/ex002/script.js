var num = document.getElementById("num")
var lista = document.querySelector("add")
let fim = document.querySelector("fim")
let valores = []
function adicionar() {
    if (num.value < 0 || num.value > 100){
        alert `Digite um número entre 0 e 100!`
    }
    for (let n in num)
        if (n == num) {
            alert `Esse valor ja existe, digite outro!`
        }
    else {
        valores.push(num.value)
        var n = Number(num.value)
        let c = 1
        let item = document.createElement('option')
        item.text = `O valor adicionado foi ${num}`
        tab.appendChild(item)
        c++
    }
}
