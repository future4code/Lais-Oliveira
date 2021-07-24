// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
const alturaRetangulo = Number (prompt("Qual a altura do retangulo?"));
const larguraRetangulo = Number (prompt("Qual a largura do retangulo?"));
const resultadoAreaTotal = (alturaRetangulo * larguraRetangulo);
    
 console.log(resultadoAreaTotal);
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number (prompt("Em que ano estamos atualmente?"))
  const anoNascimento = Number (prompt("E qual o seu ano de nascimento?"))
  const resultaAno = (anoAtual - anoNascimento)
  
  console.log(resultaAno)
}

// Exercício 3
function calculaIMC() {
const peso = Number(prompt("Qual o seu peso?"))
const altura = Number(prompt("Qual a sua altura?"))
const resultadoIMC = peso / (altura * altura)
    
console.log(resultadoIMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
const nome = prompt("Qual seu nome?")
const idade = prompt("Qual a sua idade?")
const email = prompt("Qual o seu email?")
    
console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, e o meu email é ' + email +'.')
}

// Exercício 5
function imprimeTresCoresFavoritas() {
const corFavUm = prompt("Qua a sua pimeira cor favorita?")
const corFavDois = prompt("Qua a sua segunda cor favorita?")
const corFavTres= prompt("Qua a sua terceira cor favorita?")
const todasCores = [corFavUm, corFavDois, corFavTres];
    
console.log(todasCores);
}

// Exercício 6
function retornaStringEmMaiuscula() {
const stringM = prompt("Diga bom dia!");
const strigMaiucuslaUm = stringM.toUpperCase()
  
console.log(strigMaiucuslaUm);
}

// Exercício 7
function calculaIngressosEspetaculo() {
const custoUm = prompt("Qual o valor do espetáculo teatral?")
const custoDois = prompt("Qual o valor do ingresso?")
  
console.log(custoUm / custoDois)
}

// Exercício 8
function checaStringsMesmoTamanho() {
const mesmoTamanhoUm = prompt("Para dormir você prefere calor ou frio?")
const mesmoTamanhoDois = prompt("E para trabalhar você prefere calor ou frio?")
  
console.log(mesmoTamanhoUm.length === mesmoTamanhoDois.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
const stringtUm = prompt("Diga olá")
const stringDois = prompt("Diga olá")
  
console.log(stringtUm.toUpperCase() == stringDois.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
const anoAtualDois = Number(prompt("Qual o ano atual?"));
const anoNascimentoDois = Number(prompt("Qual seu ano de nascimento?"));
const anoRg = Number(prompt("Digite seu RG"));
  
const idadeDois = anoAtualDois - anoNascimentoDois;
const emissaoRg = anoAtualDois - anoRg;
  
console.log((idadeDois <= 20 && emissaoRg >= 5) || (idadeDois > 20 && idadeDois <= 50 && emissaoRg >= 10) || (idadeDois > 50 && emissaoRg >= 15));
  
}

// Exercício 11
function checaAnoBissexto() {
const checaAno = prompt("Por favor insira um ano:");

console.log ((checaAno % 4 === 0) && (checaAno % 100 !== 0) || (checaAno % 400 === 0));
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
const idadeTres = prompt("Você tem mais de 18 anos? Sim ou Não?");
const ensino = prompt("Você possui ensino médio completo? Sim ou Não?");
const disponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Sim ou Não?");
    
console.log((idadeTres ==="sim") && (ensino === 'sim') && (disponivel === 'sim'));
}
