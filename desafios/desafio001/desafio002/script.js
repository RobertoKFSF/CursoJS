var data = new Date()
var ano = data.getFullYear()
msg.innerHTML = `Estamos no ano de ${ano}`
function verificar() {
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#3102ffff'
            if (idade <= 10) {
                img.setAttribute('src', 'babyman.jpg')
            } else if (idade < 31) {
                img.setAttribute('src', 'jovemman.jpg')
            } else if (idade < 61) {
                img.setAttribute('src', '40man.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
             }
        } else {
            genero = 'Mulher'
            document.body.style.background = '#ff44efff'
            if (idade <= 10) {
                img.setAttribute('src', 'bebemulher.jpg')
            } else if (idade < 31) {
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 61) {
                img.setAttribute('src', '40mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}