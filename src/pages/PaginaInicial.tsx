import './PaginaInicial.css';
import { Header } from "../assets/Header";
import cavalo from "../assets/cavalo.jpg";
import softsteak from "../assets/softsteak.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { Item } from "./Item";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


type Item = {
    titulo: string;
    descricao: string;
    preco: number;
    classificacao: string;
    link_imagem: string;
}

export function PaginaInicial() {

    const { data: itens, error, isFetching } =
        useFetch<Item[]>('api/v1/itens')

    const navigate = useNavigate();

    const [busca, setBusca] = useState('');

    function handleClick(novoTitulo: string) {
        navigate(`/item?titulo=${novoTitulo}`);
    }

    const lowerBusca = busca.toLowerCase();

    const pratosFiltrados = itens?.filter((prato) => prato.titulo.toLowerCase().includes(lowerBusca));

    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <body>
                <div className="container">
                    <div className="row">
                        <div id="left">
                            <img className="softsteak" src={softsteak} />
                            <h2 style={{ float: "left" }}>Soft Steak House</h2>
                        </div>
                        <div id="right">
                            <div id='center'>
                                <div className='col-2'>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div id="pesquisa">
                                        <input
                                            type="text"
                                            placeholder='Pesquisa'
                                            value={busca}
                                            onChange={(ev) => setBusca(ev.target.value)}
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className='col-2'>
                                    <FontAwesomeIcon id="filter" icon={faFilter} />
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <hr />
                            <h1>Destaques</h1>
                            <div>
                                <div>
                                    <div className="estruturaBotoesPaginaInicial">
                                        {pratosFiltrados?.map(item => {
                                            return (

                                                <div>
                                                    <button
                                                        onClick={() => handleClick(item.titulo)}
                                                        className="botaoItemPaginaInicial"
                                                    >
                                                        <div style={{ width: "50%" }}>
                                                            <img className="imagemPaginaCardapio" src={item.link_imagem} alt={item.titulo} />
                                                        </div>
                                                        <div className="estruturaInternaBotoes">
                                                            <h3>{item.titulo}</h3>
                                                            <p className="itemDescricao">{item.descricao}</p>
                                                            <strong className="itemPreco">{item.preco}</strong>
                                                        </div>
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}