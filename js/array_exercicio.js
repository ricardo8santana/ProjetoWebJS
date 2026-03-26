//Uma escola tem 10 alunos, deseja-se saber o nome de cada aluno 
//a nota1, nota2, nota3 e sua média (média = soma /3)
// Utilizar vetores para resolver esse exercicio.

const nomes = ['Ricardo', 'José', 'João', 'Melissa', 'Janaina', 'Nathali']
const nota1 = [9.9, 9.6, 7.5, 8.5, 9.5, 5.5]
const nota2 = [7.5, 5.5, 9.5, 7.5, 8.6, 7.4]
const nota3 = [8.9, 6.5, 8.5, 5.5, 4.5, 6.3]

const media = (nota1 + nota2 + nota3) / 3

for(let i=0; i<nomes.length; i++){
  console.log(`Suas notas:${nomes[i]} n1:${nota1[i]} n2: ${nota2[i]} n3:${nota3[i]} média: ${(nota1[i] + nota2[i] + nota3[i])/ 3}`)
}








