
const  nomes = ['Ricardo ', 'Jesus ', 'Melissa', 'Janaína ', 'Nathali ']

const sobrenome = ['da Silva' , 'Antunes' , 'Fagundes' , 'Medeiros', 'Rufino']

const novoNome = nomes.map((x, indice) => x + sobreNome[indice])
console.log(`Seu nome completo: ${novoNome}`)

function sobreNome(x){
    return sobrenome
}
console.log(sobrenome)