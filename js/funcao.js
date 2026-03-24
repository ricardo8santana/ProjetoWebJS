function somaValor(){
    let resp, num1, num2
    num1 = 10
    num2 = 20
    resp = num1 + num2
    console.log(`O resultado de ${num1} e ${num2} é ${resp}`)
}
//executando ou chamando a função
somaValor()

//Funções com parâmetros
function somarValor(valor1, valor2){
    let resp = valor1 + valor2
    console.log("A soma de valor1 e valor2 é ", resp)
}
//Executando ou chamando a função
somarValor(50, 70)

//Funções com parâmetros e com retorno
function somaRetorno(valor1, valor2){
    //let resp = valor1 + valor2
    return (valor1 + valor2)
}
//Executando ou chamando a função
console.log(somaRetorno(50, 70))   

//Somando duas funções
let somarFuncoes = somaRetorno(10, 20) + somaRetorno(50, 60)
console.log("A soma das funções: ", somarFuncoes)