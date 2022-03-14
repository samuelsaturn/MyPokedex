const listaSelecao = document.querySelectorAll('.pokemon')
const cardPokemon = document.querySelectorAll('.cartao-pokemon')

listaSelecao.forEach(pokemon => {
    pokemon.addEventListener('click', ()=> {

        const cartaoPokemonAberto = document.querySelector('.aberto')

        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemon = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemon)

        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivo = document.querySelector('.ativo')

        pokemonAtivo.classList.remove('ativo')

        const ativarPokemon = document.getElementById(idPokemon)

        ativarPokemon.classList.add('ativo')

    })
})