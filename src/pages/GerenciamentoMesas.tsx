import { useState } from "react";
import { Plus, Minus, Info } from "react-feather";
import "./GerenciamentoMesas.css";

export function GerenciamentoMesas() {
    const [tipos, setTipos] = useState<Number[]>([2, 4, 6, 8]);

    function renderTipoMesa(tipo:Number) {
        return(
            <div className="row">
                
                <label>{`Mesa para ${tipo}`}: </label>
                <select placeholder="Escolha">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <div className="buttons-row">
                    <button className="plus">
                        <Plus color="#ffffff"strokeWidth={5}/>
                    </button>
                    <button className="minus">
                        <Minus color="#000000" strokeWidth={5}/>
                    </button>
                </div>
            </div>
        )
    }
    return (
        <body>    
            <div className="container">
                <hr />  
                <h3 className="title">Gerenciamento de Mesas <Info/> </h3>
               <section>
                {tipos.map(renderTipoMesa)}
               </section>
            </div>
        </body>
    )
}