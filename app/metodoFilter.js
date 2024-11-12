const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    const livrosFiltrados = categoria === 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria === 'disponivel') {
        const valorTotal = calcularValorTotalDeLivros(livrosFiltrados)
        exibirValorTotalDosLivros(valorTotal)
    }
}

function exibirValorTotalDosLivros(valorTotal) {
    elementoParaInserirLivros.innerHTML += `<div class="livros__disponiveis">
                                              <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
                                            </div>`
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria)
}