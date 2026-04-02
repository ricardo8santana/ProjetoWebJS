const words = ['spray', 'elite', 'exuberante', 'destrutivo', 'presente']

const resultado = words.filter((words) => words.length > 6)
console.log(`Palavras maiores que 6 caracteres: ${resultado}`)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = numeros.filter(num => num % 2 === 0)
console.log(`Números pares: ${numerosPares}`)

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosImpares = numero.filter(num => num % 2 != 0)
console.log(`Números Ipares: ${numerosImpares}`)

const produtos = [
    {nome: "Notebook", preco: 2500},
    {nome: "Mouse", preco: 30},
    {nome: "Teclado", preco: 150},
]
const produtosCaros = produtos.filter(p => p.preco > 50)
produtosCaros.forEach(p =>{
console.log(`Lista de valores de produtos caros ${p.nome} - Preco: ${p.preco}`)
})

const listaMista = [0, "Olá", null, 5, undefined, "Mundo", true]
const listaLimpa = listaMista.filter(Boolean)
console.log(listaLimpa)