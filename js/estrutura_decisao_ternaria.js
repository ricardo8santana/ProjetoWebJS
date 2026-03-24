let idade = 17
let resposta = (idade >= 18) ? "É maior de 18 anos" : "É menor de 18 anos"
console.log(resposta)

const horas = 14
const mensagem = horas < 12 ? 'Bom dia!' : "Boa tarde!"
console.log(mensagem)

//Operador terário encadadeado(if else if else)
const nota = 85
const resultado = nota >= 90 ? "A" : nota >= 70 ? "B" : "C"
console.log(resultado)

let ativo = true 
let acao = ativo ? (console.log('Ativo'), 'on'):(console.log('Inativo'), 'off')
console.log(acao)

let num = 8
let tipo = (num % 2 === 0)? 'Par' : 'Impar'
console.log(tipo)