function tabuada() {
    var num = document.getElementById("num")
    var tab = document.getElementById("seltab")
    if (num.value.lenght <= 0){
        alert `Por favor digite um número!`
    }
    else {
        var n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${} x ${}`
        }
    }
    var t = Number(tab.value)
    if (p <= 0){
        p = 1
    } 
    if (p > f) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else if (i >= f){
        for (var c = i;f<=c;c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
    else {
        res.innerHTML = ("Contando: ")
        for (var c=i;c <= f;c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
