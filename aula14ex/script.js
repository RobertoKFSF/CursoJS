function verificar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passos = document.getElementById("passos")
    if (inicio < fim || inicio < passos) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        for (inicio;inicio < fim;inicio += passos) {
            
        }
    }
}