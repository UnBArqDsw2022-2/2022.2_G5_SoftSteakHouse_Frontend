import { useEffect, useState } from "react";
import { Plus, Minus, Info } from "react-feather";
import { Header } from "../assets/Header";
import { api, useFetch } from "../hooks/useFetch";
import "./GerenciamentoMesas.css";

interface Mesa {
    id: number,
    nomeTipo: string,
    qtdCadeiras: number,
    qtdMesas: number
}

export function GerenciamentoMesas() {
    const { data, error, isFetching } = useFetch<Mesa[]>('api/v1/mesas');
    const[mesas, setMesas] = useState<Mesa[] | null>(data)
    
    useEffect(() => {
        if(!isFetching)
        setMesas(data)
    }, [isFetching])

    const update = (mesa:Mesa) => {
        if(!mesa.id) return;
        api.put<Mesa>(`api/v1/mesas/${mesa.id}`, mesa)
            .then((result) => {
                setMesas((prev) => {
                    const tmp = [...prev] ?? [];
                    const obj = tmp.find(({id}) => id == mesa.id);
                    const index = tmp.indexOf(obj);
                    tmp[index] = result.data;
                    return tmp;
                })
            });
    }

    function renderSelectOptions(mesa: Mesa) {
        var rows = [];
        for(var i = 1;i <= mesa.qtdMesas;i++)
            rows.push(i);
        return rows.map((i) => <option key={i} className="PaginaMesasSelectOptions" selected={mesa.qtdMesas === i} value={i}>{i}</option>);
    }

    function renderTipoMesa(tipo:Mesa) {
        function add() { update({...tipo, qtdMesas: tipo.qtdMesas + 1}) }
        function remove() { update({...tipo, qtdMesas: tipo.qtdMesas - 1}) }
        return(
            <div className="PaginaMesasLinha" key={tipo.id}>
                
                <label className="label">{`Mesa para ${tipo.nomeTipo}`}: </label>
                <select  onChange={({target: {value}}) => update({...tipo, qtdMesas: parseInt(value)})} className="select" placeholder="Escolha">
                    {renderSelectOptions(tipo)}
                </select>
                <div className="buttons-row">
                    <button className="PaginaMesasIconButton plus" onClick={add}>
                        <Plus color="#ffffff"strokeWidth={5}/>
                    </button>
                    <button className="PaginaMesasIconButton minus"onClick={remove}>
                        <Minus color="#000000" strokeWidth={5}/>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="PaginaMesasCorpo">  
            <Header />  
            <div className="PaginaMesasEstrutura">
                <hr className="PaginaMesasBarra" />  
                <h3 className="title">Gerenciamento de Mesas <Info /> </h3>
                <section className="PaginaMesasItem">
                    {mesas && mesas.map(renderTipoMesa)}
                </section>
            </div>
        </div>
    )
}