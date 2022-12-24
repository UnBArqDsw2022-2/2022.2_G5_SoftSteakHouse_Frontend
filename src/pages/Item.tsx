import './Item.css';
import BatataFrita from '../assets/BatataFrita.jpg'
import { useFetch } from "../hooks/useFetch";

type Item = {
    titulo: string;
    descricao: string;
    preco: number;
}

type Adicional = {
    nome: string;
    preco: number;
}

export function Item() {
    const { data: itens, error, isFetching } = 
        useFetch<Item[]>('api/v1/itens?search=Batata+Frita')

    const { data: adicionais } = 
        useFetch<Adicional[]>('api/v1/adicionais')

    return (
        <div>
            { isFetching && <p>Carregando...</p> }
            <br />
            <img src={BatataFrita} />
            <h1>{ itens?.map(itens => {
                return itens.titulo
                })}</h1>
            <p>{ itens?.map(itens => {
                return itens.descricao
                })}</p>
            <br />
            <p>{ itens?.map(itens => {
                return itens.preco
                })}</p>
            <hr />
            <h2>Adicionais</h2>
            {adicionais?.map(adicional => {
                return (
                    <button name="Botão Adicionais">
                        {adicional.nome + " R$ " + adicional.preco}
                    </button>
                )
            })}
        </div >
    );
}