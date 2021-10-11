# Async/Await

## O que veremos hoje:
- Resolução do exercício proposto na aula passada
- Async/Await

# Async/Await

Funções Assíncronas:

Na última aula vimos que para fazer requisições
precisamos usar funções assíncronas como as Promises, com o .then() e o .catch()

## Jeito novo - async/await 
Dizemos para codigo esperar requisição antes de progredir usando a await antes de uma Promise
(isso só é possível dentro de funções assíncronas), quedevem ser marcadas com a palavra async.

**Erros:**
Para tratar erros, usamos a sintaxe try/catch.Bloco dentro do try é executado
Se der erro, execução é interrompida e o bloco do catch é executado.Ou seja, ele execulta tudo que está no try e se algo der errado ele execulta o catch

**Cuidado**
Não transformar métodos de lifecycle em funções
assíncronas, crie função auxiliar e invocar do método de lifecycle.