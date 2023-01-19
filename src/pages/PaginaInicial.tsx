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
    link_imagem: string;
}

export function PaginaInicial() {


    const { data: itens, error, isFetching } =
        useFetch<Item[]>('api/v1/itens')

    const navigate = useNavigate();

    function handleClick(novoTitulo: string) {
        if(novoTitulo != ''){
            navigate(`/item?titulo=${novoTitulo}`);
        }
    }

    const [busca, setBusca] = useState('');

    return (
        <div>
            <Header />
            <body>
                <div className="container">
                    <div className="row">
                        <div id="left">
                            <img className="softsteak" src={softsteak} />
                            <h2>Soft Steak House</h2>
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
                                            className="inputPesquisa"
                                            value={busca}
                                            onChange={(ev) => setBusca(ev.target.value)}
                                        />
                                        <button onClick={() => handleClick(busca)}
                                            className="botaoPesquisa">
                                            <FontAwesomeIcon id="MagnifyingGlass" icon={faMagnifyingGlass} />
                                        </button>

                                    </div>
                                </div>
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
                            <div className="destaque">
                                <div className="imgPrato">
                                    <img className="img" src={cavalo} />
                                </div>
                                <div className="conteudo">
                                    <h3>Bife a cavalo</h3>
                                    <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                                </div>
                            </div>
                            <div className="destaque">
                                <div className="imgPrato">
                                    <img className="img" src={cavalo} />
                                </div>
                                <div className="conteudo">
                                    <h3>Bife a cavalo</h3>
                                    <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                                </div>
                            </div>
                            <div className="destaque">
                                <div className="imgPrato">
                                    <img className="img" src={cavalo} />
                                </div>
                                <div className="conteudo">
                                    <h3>Bife a cavalo</h3>
                                    <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                                </div>
                            </div>
                            <div className="destaque">
                                <div className="imgPrato">
                                    <img className="img" src={cavalo} />
                                </div>
                                <div className="conteudo">
                                    <h3>Bife a cavalo</h3>
                                    <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                                </div>
                            </div>
                            <div className="destaque">
                                <div className="imgPrato">
                                    <img className="img" src={cavalo} />
                                </div>
                                <div className="conteudo">
                                    <h3>Bife a cavalo</h3>
                                    <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                                </div>
                            </div>
                            <div className="destaque">
                                <div className="imgPrato">
                                    <img className="img" src={cavalo} />
                                </div>
                                <div className="conteudo">
                                    <h3>Bife a cavalo</h3>
                                    <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}