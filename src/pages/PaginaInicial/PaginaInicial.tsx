import './PaginaInicial.css';
import { Header } from "../../assets/Header";
import softsteak from "../../assets/softsteak.jpg"
import React, {useEffect, useState} from "react";
import { Item } from "../Item/Item";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

type Item = {
    titulo: string;
    descricao: string;
    preco: number;
    classificacao: string;
    link_imagem: string;
}

export function PaginaInicial() {

    const { data: pratosOriginais, error, isFetching } = useFetch<Item[]>('api/v1/itens')

    const navigate = useNavigate();

    // Filter fields controllers
    const [nomeProcurado, setNomeProcurado] = useState<string>('');
    const [precoProcurado, setPrecoProcurado] = useState<string>('')
    const [classificacaoProcurada, setCalssificacaoProcurada] = useState<string>('');

    const [pratosFiltrados, setPratosFiltrados] = useState<Item[] | undefined>([]);

    useEffect(() => {resetPratosFiltrados()}, [pratosOriginais])

    function filtrarPeloNome(nomePrato: string): boolean {
        const nomeProcuradoSanitizado = nomeProcurado?.toLowerCase().replaceAll('\\s', '')
        if (!nomeProcuradoSanitizado) return true;
        return nomePrato.toLowerCase().includes(nomeProcuradoSanitizado);
    }

    function filtrarPelaClassificacao(classificaoPrato: string): boolean {
        return !classificacaoProcurada ? true : classificacaoProcurada === classificaoPrato;
    }

    function filtrarPeloPreco(precoPrato: number): boolean {
        const precoProcuradoNumber = Number(precoProcurado);
        return !precoProcuradoNumber ? true : precoPrato <= precoProcuradoNumber;
    }

    const handleClick = (novoTitulo: string) => navigate(`/item?titulo=${novoTitulo}`);

    const resetPratosFiltrados = () => pratosOriginais?.length && setPratosFiltrados(pratosOriginais);

    function filtrar(): void {
        const pratosFiltrados = pratosOriginais?.filter((prato) => filtrarPeloNome(prato.titulo) &&
                                                                   filtrarPelaClassificacao(prato.classificacao) &&
                                                                   filtrarPeloPreco(prato.preco));
        setPratosFiltrados(pratosFiltrados)
    }

    function limparFiltros(): void {
        setNomeProcurado('');
        setPrecoProcurado('');
        setCalssificacaoProcurada('');
        resetPratosFiltrados();
    }

    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
                <div className="container">
                    <div className="row">
                        <div id="left">
                            <img className="softsteak" src={softsteak} />
                            <h2 style={{ float: "left" }}>Soft Steak House</h2>
                        </div>
                        <div id="right">
                            <h1>Destaques</h1>
                            <hr style={{ 'marginBottom': '30px'}} />
                            <div className="col-md-12">
                                <form autoComplete="off" noValidate>
                                    <div className="form-row" style={{ 'display': 'flex' }}>
                                        <div className="col-md-3" id="pesquisa">
                                            <input
                                                value={nomeProcurado}
                                                onChange={(ev) => setNomeProcurado(ev.target.value)}
                                                className="inputPesquisa"
                                                placeholder="Nome" />
                                        </div>
                                        <div className="col-md-3" id="pesquisa">
                                            <input
                                                value={precoProcurado}
                                                onChange={(ev) => setPrecoProcurado(ev.target.value)}
                                                className="inputPesquisa"
                                                placeholder="Preço" />
                                        </div>
                                        <div className="col-md-3" id="pesquisa">
                                            <select
                                                placeholder="Classificação"
                                                value={classificacaoProcurada}
                                                onChange={(ev) => setCalssificacaoProcurada(ev.target.value)}
                                                className="inputPesquisa dropdownPesquisaCategoriaItem">
                                                <option value="">Qualquer tipo</option>
                                                <option value="BEBIDA">Bebida</option>
                                                <option value="ENTRADA">Entrada</option>
                                                <option value="PRATOPRINCIPAL">Prato Principal</option>
                                                <option value="SOBREMESA">Sobremesa</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-12" style={{ 'marginTop': '15px' }}>
                                <form autoComplete="off" noValidate>
                                    <div className="form-row divPesquisa">
                                        <button
                                            onClick={() => filtrar()}
                                            className="btn btn-sm btn-primary botaoPesquisa"
                                            type="button">
                                            Pesquisar
                                        </button>
                                        <button
                                            onClick={() => limparFiltros()}
                                            className="btn btn-sm btn-primary botaoPesquisa"
                                            style={{'marginLeft': '15px'}}
                                            type="button">
                                            Limpar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-12" style={{ 'marginTop': '15px' }}>
                                <div className="estruturaBotoesPaginaInicial">
                                    {pratosFiltrados?.map(item => {
                                        return (
                                            <div>
                                                <button
                                                    onClick={() => handleClick(item.titulo)}
                                                    className="botaoItemPaginaInicial">
                                                    <div style={{ width: "50%" }}>
                                                        <img
                                                            className="imagemPaginaCardapio"
                                                            src={item.link_imagem}
                                                            alt={item.titulo} />
                                                    </div>
                                                    <div className="estruturaInternaBotoes">
                                                        <h3>{item.titulo}</h3>
                                                        <p className="itemDescricao">{item.descricao}</p>
                                                        <strong className="itemPreco">{'R$ ' + item.preco}</strong>
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
    )
}