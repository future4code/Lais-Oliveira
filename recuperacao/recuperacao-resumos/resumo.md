# Local Storage e Ciclo de Vida

## O QUE VEREMOS HOJE 
- Local Storage
- O que é um Ciclo de Vida?
- Como usar métodos de ciclo de vida


# Local Storage
Local storage é um banco de dados que já vem no navegador que permite que dados sejam salvos e lidos associadas a um dominio (url) mesmo com o navegaor fechadou ou o pc desligado, ou seja, ele guarda os dados de cada site.Conseguimos ver exemplo disso na aba application do site devTools.

Ok, mas como guardar os dados?
Usá-se uma função chamada setItem() que recebe dois parametros:
chave: identificador do será guardado
dados: os dados em si, que devem ser uma string.
localStorage.steItem("usuario", "Astrodev")

o localStorage.steItem é do front end, não tem a ver com o back end e também não é sobre os cookies dos sites.

Bucando esses dados:

Usamos a função getItem()
localStorage.getItem("usuario")


Local Storage só armazena strings  quando quiser guardar outros valores (objeto, arrays) usamos essses  exemplos:

Array/Objeto ⇒ String
JSON.stringify() transforma objetos e arrays
em string

String ⇒ Array/Objeto
JSON.parse() transforma string em objetos e arrays

Usando Local Storage

const novoUsuario = {nome:"Astrodev, idade: 30}
localStorage.setItem("usuario", JSON.stringify(novoUsuario))
const usuarioString = localStorage.getItem("usuario")
const usuarioObjeto = JSON.parse(usuarioString)
console.log(usuarioObejeto.nome)

## Ciclo de vida
O que é um ciclo de vida?
São fases da vida de um componente montagem(nascimento do componente), atualização(atualizações e interções com o site) e desmontagem(quando o componente some da tela)
Cada uma dessas fases podem ser acessadas por
métodos especiais de um componente de classe, mas não somos nós que invocamos ou chamamos, ele se execulta conforme o ciclo de vida do mesmo.

Exemplos:

Montagem: assim que o componente é renderizado
pela primeira vez na tela, logo depois disso podemos execultar uma ação.

Atualização: assim que alguma informação é
alterada no estado ou nas props do componente, como quando o usuario digita algo.

Desmontagem: logo antes de o componente deixar
de estar renderizado na tela.

Como usar métodos
de Lifecycle (Lifecycle  é o mesmo que ciclo de vida)

Declararmos
eles como métodos de classe (IMPORTANTE) só funcionam em componentes de classe.

## Dúvidas
**Como ultilizar os
comandos dos componentes/Lifecycle**  
componentDidMount()
componentDidUpdate()
render()
componentWillUnmount()
essa parte não ficou clara pra mim, não consegui o suficiente para elaborar mais texto sobre.