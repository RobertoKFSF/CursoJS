let num = [5, 4, 2]
num[3] = 7
num.push(6)
console.log(num.length)
console.log(`${num.sort()}`)
console.log(`Nosso vetor é o ${num}`)

let num1 = [2, 4, 6, 1, 5, 9, 10, 12, 53, 32]
for (let cont = 0; cont < num1.length; cont++) {
    console.log(`O valor na posição ${cont}º É: ${num1[cont]}`)
}
console.log(`FIM DE PROGRAMA!`)

let num2 = [2, 4, 6, 1, 5, 9, 10, 12, 53, 32]
for(let pos in num2){
    console.log(`O valor na posição ${pos}º É: ${num2[pos]}`)
}
console.log(`FIM DE PROGRAMA!`)

let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let res = prompt("Digite um número de 0 a 9: ");
console.log(`O valor ${res} ta na posição ${num3.indexOf(res)}`)