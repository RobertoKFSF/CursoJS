function verificar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passos = document.getElementById("passos")
    var res = document.getElementById("res")
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passos.value)
    if (i <= 0 || f <= 0 || p <= 0){
        alert("FALTAM DADOS!")
    } 
    if (i < f || i < p) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else {
        for (var c=i;c <= f;c += p) {
            res.innerHTML += `contando`
        }
    }
}
