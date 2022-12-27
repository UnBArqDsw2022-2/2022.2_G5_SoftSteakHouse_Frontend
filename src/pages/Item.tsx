import './Item.css';
import BatataFrita from '../assets/BatataFrita.jpg'
import { useFetch } from "../hooks/useFetch";

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
    const { data: itens, error, isFetching } = 
        useFetch<Item[]>('api/v1/itens?search=Coxinha+de+Frango')

    const { data: adicionais } = 
        useFetch<Adicional[]>('api/v1/adicionais')

    let item = getFirstObject(itens);

    return (
        <div>
            { isFetching && <p>Carregando...</p> }
            <br />
            <img src={item?.link_imagem} />
            <h1>{ item?.titulo }</h1>
            <p>{ item?.descricao }</p>
            <br />
            <p>{ item?.preco }</p>
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

function getFirstObject(list: Item[] | null) {
    if (!list || list.length === 0) {
      return null;
    }
  
    return list[0];
  }