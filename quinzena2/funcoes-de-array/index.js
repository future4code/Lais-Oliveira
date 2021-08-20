// Callback e Funções de Array - aula10

// Exercícios de interpretação de código

/*

1 - Resposta:

{nome: "Amanda Rangel", apelido: "Mandi"} 0 (3) [{…}, {…}, {…}]
{nome: "Laís Petra", apelido: "Laura"} 1 (3) [{…}, {…}, {…}]
{nome: "Letícia Chijo", apelido: "Chijo"} 2 (3) [{…}, {…}, {…}]


2 - Resposta (3) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3 - Resposta:

(2) [{…}, {…}]

*/

// Exercícios de escrita de código

/*

1 - Resposta (interminado):

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeDoguinhos = pets.map((pet)  {
 return pet.nome;
     })

// erro  de sintaxe (?)
    

2 - Resposta: (interminado):

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
