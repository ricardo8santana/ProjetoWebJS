//Criar uma estrutura de decisaõ para acessar o tipo de calcula desejado (switch case)
//Criar funções para resolver os calculos
//Soma, subtração, multiplicação e divisão

function calculoSoma(num1, num2) {
    return (num1 + num2)
}
function calculoSubtracao(num1, num2) {
    return (num1 - num2)
}
function calculoMultiplicacao(num1, num2) {
    return (num1 * num2)
}

function calculoDivisao(num1, num2) {
    if(num1 === num2){
    }else{
        return(num1 / num2)
    }
}
calculoDivisao()
 let resp = num1, num2, op, opNome
    num1 = 20
    num2 = 30
    op = 1

switch (op) {
    case 1: resp = calculoSoma(num1, num2) 
        opNome = 'soma'
        break

    case 2: resp = calculoSubtracao(num1, num2) 
        opNome = 'sutração'
        break
    case 3: resp = calculoMultiplicacao(num1, num2) 
        opNome = 'multiplicação'
        break
    case 4: resp = calculoDivisao(num1, num2) 
        opNome = 'divisao'
        break

}
console.log(`A ${opNome} de ${num1} e ${num2} é ${resp}`)