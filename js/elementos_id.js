//acesso aos elementos pelo ID
const escrevendoID = document.getElementById('demo')
const titleID = document.getElementById('title')
console.log(escrevendoID)
console.log(titleID)

//Acesso aos elementos pela tag
const textos = document.getElementsByName('3')

// Acessando  elementos pela classe
const elementos = document.getElementsByClassName('subTitulo')

//modificando o conteúdo do elemento selecionado pelo ID

escrevendoID.innerHTML = "Por outro lado, o desafiador cenário globalizado oferece uma interessante oportunidade para verificação dos paradigmas corporativos."
titleID.innerHTML = "Gostaria de enfatizar que a determinação clara de objetivos desafia a capacidade de equalização dos níveis de motivação departamental."


//Modificando o conteúdo pela tag
for(let i = 0; i < textos.length; i++){
textos[i].innerHTML = "Alterado pelo javascript"
}
if(textos[0] > 0){
    textos[0].innerHTML = "Colocar texto"
}

//Modificando o conteúdo pela classe
for(let i = 0; i < elementos.length; i++){
    elementos[i].innerHTML = "Textos modificados"
}

console.log(escrevendoID)
console.log(titleID)