# Integração Básica de APIs

## Relembrando...

# O que já vimos?
- Como criar aplicações React que interave com usuário

- O que é e como funciona uma API

- Como consumir uma API no Postman

API é uma interface um programa disponivel na nuvem
que permite a interação com o backend(faz o codigo que responde) ○ Frontend executa requisições e o Backend responde.

E para fazer esse requisição olhamos a documentação e
"preenchemos" os parâmetros corretamente:

- Endereço
- Método
- Headers
- Body

(Até então utilizamos o Postman para testar as requisições)

## O que veremos hoje:
- Como consumir uma API usando Javascript
- Como lidar com dados externos no React
- Dados dinâmicos nas nossas aplicações

**Requisições em Javascript**

**Axios (presica ser instalado no terminal $ npm install axios) biblioteca para fazer requisições como o Postman, só que dentro do código**

**Axios** 

Problemas: 
- Se a requisição demorar muito?
- E se der erro na requisição?
- Parâmetros errados
- Servidor com problema
- Usuário sem internet

**Tempo de Requisição**

Não temos controle sobre o tempo da requisição
mas enquanto esperamos o Javascript cria uma assincronicidade

**Assincronicidade**

Podemos fazer com que o Javascript execute funções
demoradas de forma assíncrona, o código não espera sua conclusão para prosseguir com o Promises(ou seja, não será resolvido na hora e sim futuramente)

**Tratando erros em promises
depois de todos os .then(), colocamos um .catch()**

**Sincronicidade**

Normalmente, o código é executado linha após linha quando uma função é chamada, o código aguarda a execução dela para prosseguir.(ou seja, será execultado na hora)

### Requisições no React
**Buscando dados:**
Para mostrar e buscar  dados para fazer uma ação
depois de pegar o dado, é necessário guardá-lo em
algum lugar para isso, usamos o estado.

**Buscando dados automaticamente:**

Quando queremos carregar os dados automaticamente e não queremos que a tela fique travada enquanto a requisição é feita,usamos os métodos de lifecycle

**Fazendo a Requisição**

Usando o método de lifecycle componentDidMount()faça a requisição usando o axios e colocar oresultado no estado

**Enviando Dados**

Ocorrem chamado de evento, queremos que o usuario confirme, atráves de um imput ou label. Frequentemente, mandaremos dados vindos de um
formulário, por exemplo.

## Dúvidas

Buscando dados automaticamente e fazendo a requisição, eu entendi em aula, mas estou revisando as anotações e acho que ficou um pouco confuso para mim.