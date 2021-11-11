# Introdução ao React



# DOM
DOM: para o Javascript poder interagir com o HTML, precisamos do DOM (Document Object Model), ou seja, "modelo de objeto do documento" (ele é um objeveto em js que representa é o html da pagina)
Após o navegador ler e renderizar o seu HTML, ele cria um conjunto de comandos que podem acessar, alterar ou criar os elementos no seu site, junto com os seus valores

## Eventos

Eventos: De uma maneira geral, chamamos de evento um 
processo em que o status ou o valor de um elemento 
HTML é alterado
Exemplos:
Usuário clica em algum elemento
Usuário insere um valor em uma tag input
Usuário clica na tecla "enter" do seu computador

Pegando um evento de um elemento html
usamos esta sintaxe:
<elemento evento="nomeDaFuncao()">

Podemos passar mais de um evento para um componente

Eventos comuns
onchange: um elemento ou seu valor foram alterados
onclick: usuário clicou no elemento
onmouseover: usuário posicionou mouse em cima do elemento
onmouseout: usuário tirou o mouse do elemento.

Um pouco de história
Antes de chegar no ponto que estamos hoje mexiamos diretamente no DOM (manipular o DOM)mas era um processo dificil então hoje em dia temos frameworks javascript, que são grandes bibliotecas de código que fazem essa conexão, esse link.

Problemas de manipular o DOM diretamente :
Funções disponíveis difíceis de manipular
Dev precisa de preocupar com muitas coisas
Toda vez que um dado é alterado, o DOM precisa ser atualizado: é difícil manter a consistência


### Bibliotecas(frameworks javascript)
Biblioteca é um conjunto de funções e variaveis que "escondem" o codigo complexo e te fornecem algo mais fácil de usar

Hoje existem várias bibliotecas para facilitar esse 
processo de desenvolvimento web.
AngularJS(google),Ember.js,Vue.js e o React



### React

React é uma biblioteca desenvolvida e mantida pelo Facebook, e é uma das bibliotecas mais usadas para desenvolvimento web no mundo.

Por que React?
O React é muito usado por desenvolvedores
utiliza somente Javascript (centraliza os 3 pilares da Web HTML, CSS e JS),diferentemente de outras bibliotecas, não requer o aprendizado de outras linguagens de programação ou particularidades que fogem dos padrões do JS.

Criado por uma grande empresa (Facebook)
nos dá segurança,qualidade de código,manutenção frequente

Reatividade
quando os dados mudam, a interface (DOM) reflete a mudança imediatamente e automaticamente

Componentização
Permite de forma muito simples quebrar o 
código em componentes. Componentes são blocos de código que podem ser nomeados e reutilizados (como funções)

Criando um Projeto React

Com o Node já instalado vá até o terminal e digite 
npx create-react-app nome-do-app

O comando cria uma pasta dentro dela, serão criados vários arquivos e algumas 
pastas que são necessários para o React funcionar.

### Diferenças entre JSX e HTML
O JSX possui algumas diferenças para o HTML, como:

* Atributos - Nomes e Valores
* Funções de Eventos
* Regra do pai único
* Usando expressões Javascript
* Self-closing tags

### Deploy com Surge

ubir um programa para a internet é o que 
chamamos de deploy para fazer o deploy de um site React, é necessário gerar um build antes

Para fazer o deploy, vamos usar o Surge
Para instalá-lo, rode: npm install -g surge
Para fazer o deploy, rode (na pasta raiz do projeto, depois de fazer o build): surge ./build