//Acessando os elementos html por id
const inputTarefas = document.getElementById("inputTarefas")
const btnAdicionar = document.getElementById("btnAdicionar")
const listaTarefas = document.getElementById("listaTarefas")
const btnLimpar = document.getElementById("btnLimpar")

//Função no botão adicionar
btnAdicionar.addEventListener("click", adicionarTarefas)

btnLimpar.addEventListener("click", () => alert("Limpar ..."))

function adicionarTarefas() {
    const vTarefas = inputTarefas.value

    if (vTarefas === "") {
        alert("Digite uma tarefa")
        return
    }

    const li = document.createElement("li")
    li.innerText = vTarefas
 }
