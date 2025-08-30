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
    if (valores.length == 0) {
        alert ('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(maior < valores[pos])
                maior = valores[pos]
            if(menor > valores[pos])
                menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML += `<p>Ao todo, temos ${tot} cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}


