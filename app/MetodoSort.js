const ord = document.querySelector('.btn-ordenacao')

ord.addEventListener('click', () => {

    console.table(livros)
    let livros_ordenados = livros;
    livros_ordenados.sort(function(a, b) {
        return a.preco - b.preco
    })

    Exibir(livros_ordenados)
})