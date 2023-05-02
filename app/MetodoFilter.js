const btn = document.querySelectorAll('.btn')
const disp = document.querySelector('.btn-disponiveis')

btn.forEach((elem) => {

    valor_total.innerHTML = ""

    elem.addEventListener('click', () => {
        let livros_filtrados = livros.filter(event => event.categoria == elem.value)
        console.log(elem.value)
        console.log(livros_filtrados)

        Exibir(livros_filtrados)
    })
})

disp.addEventListener('click', () => {

        var livros_disponiveis = livros.filter(event => event.quantidade > 0);

        var preco_total = livros_disponiveis.reduce((acc, atual) => acc + atual.preco, 0).toFixed(2)

        console.log(preco_total)

        var div_total = document.createElement('div')

        div_total.className = "livros__disponiveis"

        div_total.innerHTML = `
            <p>Todos os livros disponíveis por R$ <span id="valor">${preco_total}</span></p>
        `

        Exibir(livros_disponiveis)

        valor_total.appendChild(div_total)
})