import './Item.css';
import BatataFrita from '../assets/BatataFrita.jpg'
import { useFetch } from "../hooks/useFetch";

type Item = {
    cep: string;
    state: string;
    city: string;
}

export function Item() {
    const { data: item, error, isFetching } = 
        useFetch<Item>('api/cep/v1/72135190')

    return (
        <div>
            { isFetching && <p>Carregando...</p> }
            <br />
            <img src={BatataFrita} />
            <h1>{ item?.cep }</h1>
            <p>{ item?.state }</p>
            <br />
            <p>{ item?.city }</p>
            <hr />
            <h2>Adicionais</h2>
            <button name="Botão Adicionais">Refri Lata R$ 08,99</button>
            <button name="Botão Adicionais">Cheddar e Bacon  R$ 08,99</button>
            <button name="Botão Adicionais">Filé e Provolone R$ 11,99</button>
        </div >
    );
}