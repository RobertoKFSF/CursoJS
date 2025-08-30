function tabuada() {
    var num = document.getElementById("num")
    var tab = document.getElementById("seltab")
    if (num.value.lenght <= 0){
        alert `Por favor digite um número!`
    }
    else {
        var n = Number(num.value)
        var t = Number(tab.value)
        let c = 1
        tab.innerHTML = ` `
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
