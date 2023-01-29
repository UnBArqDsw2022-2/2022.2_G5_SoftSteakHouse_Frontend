import "../../App.css"
import { Header } from "../../assets/Header";
import '../PaginaInicial/PaginaInicial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPersonMilitaryToPerson } from '@fortawesome/free-solid-svg-icons';
import { useFetch } from "../../hooks/useFetch";
import { Item } from "../Item/Item";
import { useNavigate } from "react-router-dom";
import './Cardapio.css';
import React, { useState } from "react";



type Item = {
    titulo: string;
    descricao: string;
    preco: number;
    classificacao: string;
    link_imagem: string;
}

export function Cardapio() {

    const { data: itens, error, isFetching } = useFetch<Item[]>('api/v1/itens')

    const navigate = useNavigate();

    function handleClick(novoTitulo: string) {
        navigate(`/item?titulo=${novoTitulo}`);
    }

    const [busca, setBusca] = useState('');

    const lowerBusca = busca.toLowerCase();

    const pratosFiltrados = itens?.filter((prato) => prato.titulo.toLowerCase().includes(lowerBusca));

    const entrada = pratosFiltrados?.filter((prato) => prato.classificacao == "ENTRADA");

    const pratoPrincipal = pratosFiltrados?.filter((prato) => prato.classificacao == "PRATOPRINCIPAL");

    const sobremesa = pratosFiltrados?.filter((prato) => prato.classificacao == "SOBREMESA");

    const bebida = pratosFiltrados?.filter((prato) => prato.classificacao == "BEBIDA");

    return (
        <>
            <div>
                <Header />
                <br />
                <br />
                <br />
                <br />
                <div id="center">
                    <div className="col-2">
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
                    <div className="col-2">
                        <FontAwesomeIcon id="filter" icon={faFilter} />
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <div className="paginaCardapioEstrutura">
                    <div>
                        <h2>Entradas</h2>
                        <hr />
                        <div>
                            <div className="estruturaBotoesCardapio">
                                {entrada?.map(item => {
                                    return (

                                        <div>
                                            <button
                                                onClick={() => handleClick(item.titulo)}
                                                className="botaoItem"
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
                    <div>
                        <h2>Pratos Principais</h2>
                        <hr />
                        <div>
                            <div className="estruturaBotoesCardapio">
                                {pratoPrincipal?.map(item => {
                                    return (

                                        <div>
                                            <button
                                                onClick={() => handleClick(item.titulo)}
                                                className="botaoItem"
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
                    <div>
                        <h2>Sobremesas</h2>
                        <hr />
                        <div>
                            <div className="estruturaBotoesCardapio">
                                {sobremesa?.map(item => {
                                    return (

                                        <div>
                                            <button
                                                onClick={() => handleClick(item.titulo)}
                                                className="botaoItem"
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
                    <div>
                        <h2>Bebidas</h2>
                        <hr />
                        <div>
                            <div className="estruturaBotoesCardapio">
                                {bebida?.map(item => {
                                    return (

                                        <div>
                                            <button
                                                onClick={() => handleClick(item.titulo)}
                                                className="botaoItem"
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
        </>
    );

}
