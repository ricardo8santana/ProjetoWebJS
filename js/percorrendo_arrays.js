const frutas = ['Banana', 'Goiaba', 'Maçã', 'Uva', 'Melância', 'Tomate', 'Laranja']

frutas.push("Morango")
frutas.pop(2)

console.log(`Tamanho do array de linha ${frutas.length}`)

console.log(frutas)

for(let i=0; i<frutas.length; i++){
    console.log(frutas[i])
}