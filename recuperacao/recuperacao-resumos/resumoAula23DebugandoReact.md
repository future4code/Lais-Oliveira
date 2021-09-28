# Debugando React

## O que vamos ver hoje?

- O que é Debug?

- Processo de Debug

- Últimos recursos

# Bugs
Sempre que programação é um conjunto de ações, porem ás vezes cordenamos errado 

Codigos sempre tem bugs, e precisamos achar esse erro e "debugar" e faz parte de codar degubar os codigos, lidem com isso, é um processo para o codigo funcionar.
## O que é Debug
O que é Debug
Processo de encontrar e descobrir os motivos dos
erros para poder corrigi-lo,existem várias formas e ferramentas para isso e faz parte do dia-a-dia!

**Processo de Debug**
Fique tranquilo, siga com calma, será mais fácil de achar o problema, aqui uma lista para ajudar a aprender a debugar!

### Debugando na prática:

1. Clareando o problema
 1. pode acontecer duas coisas, o codigo não execulta(exeções) erro gritandes, mas é um bom sinal, pois ele te sinaliza o erro, ou seja ele te explica o que você tem que corrigir.

já quando um código executa mas não funciona do jeito que eu estava esperando, é um pouco mais dificil pois o erro está mais escondido

1. Examinando suas suposições
 1. Pense coisas obvias como,erros de digitação,a  função, estado, prop, etc. está correta?

1. Analisando o código passo a passo
 1. Com algumas hipóteses descartadas, procure mais a fundo,analise as possibilidades de onde poderia estar errando volte ao codigo e releia, use o console para conseguir avançar nesse begud.
 Usando o Console
 1.Use o console.log para imprimir algo, a partir dai podemos observar se estamos esquecendo de analisar algo, se estamos entendendo o que estamos debugando e onde está cada coisa e quais dados esse codigo tem.

O console mostra mensagens importantes para quando estamos debugando, chamamos isso de logs, logs possuem três niveis:

- Info/logs: sem uma relevância específica

- Warnings: coisas que podem originar problemas

- Erros: problemas que não podem ser ignorados
1. Testar possíveis soluções
  1. Não tenha medo de testar  diferentes soluções e veja o que acontece e o que é modificado, mas é importante saber o que se está testando, mesmo que essa solução tenha sido pega da internet, como o codigo é seu é importante saber o que está colocando nos seus codigos, deixe anotado ou um observação para si. Assim, com o tempo você saberá o que testar, afinal já passou por isso antes.
  

###### Mais Recursos
Já tentei tudo, e agora?
Se chegarmos ao ponto onde as alternativas mais comuns não funcionaram e o bug não é óbvio e muito difícil
encontrá-lo, ainda sim dá pra resolver.

Como? removendo o codigo:
Sim isso mesmo, remova ou melhor comente determinadas partes do codigo, partes pequenas que você sabe o que fazem, e a partir daí é ir observando o compotamento do codigo, o que quebra o que funciona, se mudou, se não mudou nada e etc. 

Use o Google:
Muito provavelmente o bug que aconteceu com você, aconteceu com outrso devs, então procure no google, mas atente-se a como procurar o problema, ásvezesnão encontramos a solução em buscadores pois não sabemos formular a dúvida.


## Dicas:

- Para sabermos isso, basta copiar a mensagem de
erro e colar no buscador

- Acreditem: todos os devs usam essa técnica
- Buscar Ajuda

- Quando já tentou de tudo, não exite em pedir ajuda
para um colega

- Tenha certeza de que coletou a maior quantidade de
informações possível sobre o problema

- Explique o que você sabe detalhadamente, muitas vezes você entenderá a solução só de explicar!

## Dúvidas:

Apagar e reinstalar dependências, confesso que entendi a ideia mas não consigo imaginar como isso seria feito.

Esse tópico está no slide 26 e diz o seguinte:

Quando o erro para, sabemos que a última parte
removida é a causadora do erro!
Apagar e reinstalar dependências
É possível que por algum motivo, os arquivos das
bibliotecas que usamos (node_modules) tenham
sido instalados com algum problema

Frequentemente isso pode ser resolvido apagando a
pasta node_modules e reinstalando as dependências
com npm install