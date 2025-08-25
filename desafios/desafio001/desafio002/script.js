var data = new Date()
var ano = data.getFullYear()
msg.innerHTML = `Estamos no ano de ${ano}`
function verificar() {
    var fano = document.getElementById('txtano')
    var res = document.getElementById('div#res')
    //var mas = document.getElementById('mas')
    //var fem = document.getElementById('fem')
    var img = document.getElementById('imagem')
    if (fano.ariaValueMax.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }
}