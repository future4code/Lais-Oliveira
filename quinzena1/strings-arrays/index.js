// Strings e Arrays - aula5

//Exercícios de interpretação de código

/*

1 - Resposta:

undefined
null
11
3
(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
9


2 - Resposta:

SUBI NUM ÔNIBUS EM MIRROCOS 
27

*/

//Exercícios de escrita de código

/*
1 - Resposta:

const emailDoUsuario = prompt("Qual seu email?")
const nomeDoUsuario = prompt("Qual seu nome?")

console.log("O email " + emailDoUsuario +" foi cadastrado com sucesso. Seja bem-vinda(o) " + nomeDoUsuario)

2 - Resposta:

const comidasPreferidasDaLais = [
"Arroz",
"Feijão",
"Farofa",
"Batata frita",
"Pizza"
]
console.log(comidasPreferidasDaLais)
         
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasPreferidasDaLais[0])
console.log(comidasPreferidasDaLais[1])
console.log(comidasPreferidasDaLais[2])
console.log(comidasPreferidasDaLais[3])
console.log(comidasPreferidasDaLais[4])

const comidaUsuario = prompt("Agora, qual a sua comida preferida?")
comidasPreferidasDaLais[1] = comidaUsuario
console.log(comidasPreferidasDaLais)


3 - Resposta:

const listaDeTarefas = []
const tarefaUm = prompt("Insira aqui sua primeira tarefa")
const tarefaDois = prompt("Insira aqui sua segunda tarefa")
const tarefaTres = prompt("Insira aqui sua terceira tarefa")

listaDeTarefas.push(tarefaUm)
listaDeTarefas.push(tarefaDois)
listaDeTarefas.push(tarefaTres)
console.log(listaDeTarefas)


const tarefaFeita = prompt("Digite o índice de uma tarefa que já realizou: 0, 1 ou 2")
listaDeTarefas.splice(Number(tarefaFeita), 1)
console.log(listaDeTarefas)

*/

