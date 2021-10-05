Exercícios de Fixação de Javascript - Treino 1

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salario = 2000 + qtdeCarrosVendidos*100 + valorTotalVendas*0.05
  return salario
}

Exercícios de Fixação de Javascript - Treino 2

function calculaPrecoTotal(quantidade) {
	 if (quantidade < 12) {
      return quantidade * 1.3
   } else {
      return quantidade * 1
   }
}


Exercícios de Fixação de Javascript - Treino 3





Exercícios de Fixação de Javascript - Treino 4

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
	let quantidade = 0

  for (let number of arrayDeNumeros){
    if (number === numeroEscolhido){
      quantidade++
    }
  }

  if(quantidade === 0){
		return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${quantidade}x`
  }
}

Exercícios de Fixação de Javascript - Treino 5

function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

  const novoArray = animais.map((bichinho)=>{
    return bichinho.nome
  })
  
  return novoArray


}

Exercícios de Fixação de Javascript - Treino 6

function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

 // Escreva seu código aqui

}