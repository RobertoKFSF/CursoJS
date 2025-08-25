function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('hora')
    var data = new Date()
    var horas = data.getHours()
    var min = agora.getMinutes()
    var seg = agora.getSeconds()
    msg.innerHTML = `Agora são exatamente ${horas}:${min}:${seg}hrs.`
    if (hora < 12 && hora >= 6) {
    msg.innerHTML('Bom dia!')
    } else if (hora <= 18 && hora >= 12){
    msg.innerHTML('Boa tarde!')
    } else if (hora > 18) {
    msg.innerHTML('Boa noite!')
    } else { 
    msg.innerHTML('Boa Madrugada!')
    }
}