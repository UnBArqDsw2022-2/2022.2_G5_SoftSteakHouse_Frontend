import './Item.css';
import { useFetch } from "../hooks/useFetch";
import { Header } from "../assets/Header";

type Item = {
    titulo: string;
    descricao: string;
    preco: number;
    link_imagem: string;
}

type Adicional = {
    nome: string;
    preco: number;
}

export function Item() {
    const searchParams = new URLSearchParams(window.location.search);
    const titulo = searchParams.get('titulo');

    const { data: itens, error, isFetching } =
        useFetch<Item[]>('api/v1/itens?search=' + titulo)

    const { data: adicionais } =
        useFetch<Adicional[]>('api/v1/adicionais')

    const item = itens && itens[0];

    return (
        <div>
            {isFetching && <p>Carregando...</p>}
            <Header />
            <div>
                <img src={item?.link_imagem} />
                <h1>{item?.titulo}</h1>
                <p>{item?.descricao}</p>
                <p>{item?.preco}</p>
                <hr />
                <h2>Adicionais</h2>
                {adicionais?.map(adicional => {
                    return (
                        <button name="Botão Adicionais" className="botaoAdicional">
                            <div style={{ float: "left" }}>{adicional.nome}</div>
                            <div style={{ float: "right" }}>{"R$ " + adicional.preco}</div>
                        </button>
                    )
                })}
            </div>
        </div >
    );
}
