let op, resp, num1, num2, nomeOp

console.log("Escolha a operação desejada")
console.log("1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão")
console.log("Insira os números para realizar a operação")

op = 4
num1 = 10
num2 = 0

//Template string
console.log(`Operação escolhida ${op}\ne número digitados ${num1} e ${num2}`)

switch (op) {
    case 1: resp = num1 + num2
        nomeOp = 'soma'
        break
    case 2: resp = num1 - num2
        nomeOp = 'subtração'
        break
    case 3: resp = num1 * num2
        nomeOp = 'multiplicação'
        break
    case 4:
        if (num2 === 0) {
            resp = "impossivel divisão por 0"
            nomeOp = 'divisão'
        } else {
            resp = num1 / num2
            nomeOp = 'divisão'
        }
        break
}

console.log(`A ${nomeOp} de ${num1} e ${num2} é ${resp}`)