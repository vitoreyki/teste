const section = document.querySelector('#livros')
const valor_total = document.querySelector('#valor_total_livros_disponiveis')

function Exibir(lista) {

    valor_total.innerHTML = ""

    section.innerHTML = ""

    lista.forEach((elem) => {

        // let disp = Disponibilidade(elem)

        let disp = elem.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

        const div = document.createElement('div')

        div.className = 'livro'

        div.innerHTML = `
        <img class="${disp}" src="${elem.imagem}" alt="${elem.alt}" />

        <h2 class="livro__titulo">
        ${elem.titulo}
        </h2>

        <p class="livro__descricao">${elem.autor}</p>
        <p class="livro__preco" id="preco">${elem.preco.toFixed(2)}</p>

        <div class="tags">
            <span class="tag">${elem.categoria}</span>
        </div>
        `

        section.appendChild(div)

    })
}

// function Disponibilidade(lista){

//     if(lista.quantidade <= 0)
//         return 'livro__imagens indisponivel'
//     else    
//         return 'livro__imagens'
// }