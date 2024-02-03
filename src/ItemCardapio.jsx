export function ItemCardapio({ nome, preco, descricao, imagem}) {
    return <div className="container-item-cardapio">
        <div>
            <h2>{nome}</h2>
            <p>{preco}</p>
            <p>{descricao}</p>
        </div>
        <img src={imagem} alt="" />
    </div>
}
