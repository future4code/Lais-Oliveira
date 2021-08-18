/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Atividade quinzenal 2 - BlackJack!

console.log("Sejam muito bem-vindos senhoras, senhores e máquinas! Sentem-se e vamos jogar BlackJack!")

const blackJack = confirm("Podemos iniciar a partida?")

if (blackJack) {
    let cartaUsuarioUm = comprarCarta()
    let cartaUsuarioDois = comprarCarta()
    let cartaSortidaUm = comprarCarta()
    let cartaSortidaDois = comprarCarta()

    let pontuacaoUsuario = cartaUsuarioUm.valor + cartaUsuarioDois.valor
    let pontuacaoSortida = cartaSortidaUm.valor + cartaSortidaDois.valor

    console.log(`Usuário - cartas: ${cartaUsuarioUm.texto} ${cartaUsuarioDois.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${cartaSortidaUm.texto} ${cartaSortidaDois.texto} - ${pontuacaoSortida}`)

    if (pontuacaoUsuario > pontuacaoSortida) {
        console.log("Você ganhou, uhu!")
    } else if (pontuacaoSortida > pontuacaoUsuario) {
        console.log("O computador ganhou, tente outra vez!")
    } else if (pontuacaoUsuario === pontuacaoSortida) {
        console.log("Empate entre jogadores")
    }

} else {
    console.log("O jogo acabou")
}


/////