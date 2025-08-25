function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 8
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `Agora são exatamente 0${hora}:${min}:${seg}hrs.`
    if (hora < 12 && hora >= 6) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora <= 18 && hora >= 12){
        img.src = 'tarde.jpg'
    } else if (hora > 18) {
        img.src = 'noite.jpg'
    } else { 
        img.src = 'madrugada.jpg'
    }
}