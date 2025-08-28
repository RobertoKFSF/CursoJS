function verificar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passos = document.getElementById("passos")
    var res = document.getElementById("res")
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passos.value)
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
