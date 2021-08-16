// EXERCÍCIO 01
function inverteArray(array) {
let arrayInverte = []
for(let i = array.length - 1; i >= 0; i-- ) {
arrayInverte.push(array[i])
}
return arrayInverte

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let arrayParesElevados = []
for(let i = 0; i < array.length; i++) {
if(array[i] % 2 === 0) {
arrayParesElevados.push(array[i] * array[i])
}
}
return arrayParesElevados

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
let arrayPares = []
for(let i = 0; i < array.length; i++) {
if(array[i] % 2 === 0) {
arrayPares.push(array[i])
}
}
return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let maiorNumero = array[0]
for (let i = 0;i < array.length;i++) {
if (maiorNumero < array[i]) {
maiorNumero = array[i]
}
}
return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
return array.length // gostei desse, hein hehe :)
} 

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
return [false, false, true, true, true]
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
let numeron = []
for(let number = 0; numeron.length < n; number++) {
if(number % 2 === 0) {
numeron.push(number)
}
}
return numeron
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
if (a !== b && b !== c) {
return 'Escaleno'
} else if (a === b && b === c) {
return 'Equilátero'
} else {
return 'Isósceles'
}
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
let maiorNumero
let menorNumero
let maiorDivisivelPorMenor

if (num1 > num2) {
maiorNumero = num1
menorNumero = num2
} else {
maiorNumero = num2
menorNumero = num1
}
maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
let diferenca = maiorNumero - menorNumero

return {
maiorNumero: maiorNumero,
maiorDivisivelPorMenor: maiorDivisivelPorMenor,
diferenca: diferenca
}

// Formato do objeto a ser retornado:
// {
//   maiorNumero: X,
//   maiorDivisivelPorMenor: Y,
//   diferenca: Z
// }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
let filme = {
nome: 'O Diabo Veste Prada',
ano: 2006,
diretor: 'David Frankel',
atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}
return filme
}

// esse exercicio foi feito em aula! <3

// EXERCÍCIO 13
function imprimeChamada() {
let filme = {
nome: 'O Diabo Veste Prada',
ano: 2006,
diretor: 'David Frankel',
atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

let atoresD = ""
for (let i = 0;i < filme.atores.length;i++) {
if (i === filme.atores.length - 1) {
atoresD += filme.atores[i]
} else {
atoresD += filme.atores[i] + ", "
}
}
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresD}.` 
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
let retangulo = {
largura: lado1,
altura: lado2,
perimetro: 2 * (lado1 + lado2),
area: lado1 * lado2
}
return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
let anonimo = {... pessoa, nome:'ANÔNIMO'}
return anonimo
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
