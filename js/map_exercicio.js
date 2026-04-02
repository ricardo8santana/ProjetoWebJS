
const  nomes = ['Ricardo ', 'Jesus ', 'Melissa', 'Janaína ', 'Nathali ']

const sobrenome = ['da Silva', 'Antunes', 'Fagundes', 'Medeiros', 'Rufino']

const novoNome = nomes.map((x) => x + 'de Santana')
console.log(`Seu nome completo: ${novoNome}`)

function sobreNome(x){
    return x + 'de Santana'
}
console.log(nomes, sobrenome)