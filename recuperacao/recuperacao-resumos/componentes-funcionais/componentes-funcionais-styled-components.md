# Componentes Funcionais e styled-components

## O que vamos ver hoje?
* O que é um componente?
* Criando um componente
* Usando componentes dentro de outros
* Props
* styled-components

# Componentes
São blocos de código reutilizáveis que representam um pedaço de interface, “gerando” o HTML que aparece na página, entra como props e sai como jsx.
## O que deve ser um componente?
Não existe uma regra de quando componentizar
uma parte da tela ou uma regra exata de quanso fazer. Mas baseando- se em boas práticas podemos considerar criar um componente quando:

Layout repetido, transformando isso em componente e cada vez que for usar eu chamo esse componente

Código grande ou confuso
Queremos dar um nome significativo à uma parte da interface.

### Componentes em React

Por enquanto,componentes em React são funções com algumas regras específica: * Primeira letra do nome maiúscula (diferente do js puro)
* Deve retornar um JSX (com um único pai)


**Usando um Componente:**
Para colocar o componente na tela, chamamos ele
em um componente pai, dentro do nosso JSX
Quando colocamos um componente A dentro de um componente B, falamos que o componente A é filho do componente B (App.js, criado por
padrão quando criamos um app React, é o pai de
todos os outros componente)
Para chamar o componente, usamos uma sintaxe
semelhante à do HTML e o nome deve ser mantido, com a letra maiúscula para não "confundir" o react


**Self-Closing Tag**
Quando um componente não possui nada entre a abertura e o fechamento de sua tag, é preferível que se use a sintaxe self-closing, que é uma tag auto fechante (como br, a, hr )


**Separando em Arquivos**

Pode ter mais de um componente em um mesmo arquivo (afinal, eles são só funções), mas por boa prática criar um arquivo por componente e para chamar esse compobente no app usamos a sintaxe imports e exports.
O arquivo deve ter o mesmo nome do componente que guarda, recomenda-sea criação de uma pasta chamada components, que guarde todos os componentes criados e todo arquivo que possui um componente deve
importar o React no topo devemos exportar o componente (antes do nome)

### Styled Components
É uma lib (biblioteca) que garante que o
CSS de cada componente seja totalmente restrito
àquele componente, existem outras libs, mas escolhemos essa por ser famosa no mercado

Para instalar, rodar: npm install styled-components.
