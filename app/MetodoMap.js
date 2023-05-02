function Desconto(lista){

    const desc = 0.3;

    desconto = lista.map(elem => {
        return {
            ...elem, preco: elem.preco - (elem.preco * desc)
        }
    })

    return desconto;
}