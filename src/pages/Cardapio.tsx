import "../App.css"
import { Header } from "../assets/Header";
import './PaginaInicial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useFetch } from "../hooks/useFetch";
import { Item } from "./Item";
import { useState, useEffect } from 'react';

type Item = {
    titulo: string;
    descricao: string;
    preco: number;
    link_imagem: string;
}


export function Cardapio() {
    const { data: itens, error, isFetching } =
        useFetch<Item[]>('api/v1/itens')

    const [showNovaTela, setShowNovaTela] = useState(false);
    const [title, setTitle] = useState<string>('');

    function handleClick(newTitle: string) {
        setTitle(newTitle);
        setShowNovaTela(true);
    }

    return (
        <>
            {showNovaTela && <Item title={title} setTitle={setTitle} />}
            {!showNovaTela && (
                <div>
                    <Header />
                    <div id="center">
                        <div className="col-2">
                            <div id="pesquisa">Pesquisa</div>
                        </div>
                        <br />
                        <div className="col-2">
                            <FontAwesomeIcon id="filter" icon={faFilter} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <div className="container">
                        <div className="row">
                            <h2>Entradas</h2>
                            <hr />
                            <div>
                                <div style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                                    {itens?.map(item => {
                                        return (
                                            <div>
                                                {!showNovaTela && (
                                                    <button
                                                        style={{ display: "flex", width: "100%" }}
                                                        onClick={() => handleClick(item.titulo)}
                                                    >
                                                        <div style={{ width: "50%" }}>
                                                            <img src={item.link_imagem} alt={item.titulo} />
                                                        </div>
                                                        <div style={{ width: "50%", padding: "16px" }}>
                                                            <h3>{item.titulo}</h3>
                                                            <p>{item.descricao}</p>
                                                            <p>{item.preco}</p>
                                                        </div>
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}