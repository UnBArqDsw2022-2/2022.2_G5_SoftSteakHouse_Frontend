import './Item.css';
import BatataFrita from '../assets/BatataFrita.jpg'

export function ImagemItem() {
    return (
        <div>
            <br />
            <img src={BatataFrita} />
            <h1>Batata Frita</h1>
            <p>Batata colhida nos lindos campos de Barba Longa e frita no óleo usado nos pastéis
                do dia anterior. Temperada com a grama triturada do comércio vizinho.</p>
            <p>R$ 19,99</p>
            <hr />
            <h2>Adicionais</h2>
            <button name="Botão Adicionais">Refri Lata _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ R$ 08,99</button>
            <br />
            <br />
            <button name="Botão Adicionais">Cheddar e Bacon _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ R$ 08,99</button>
            <br />
            <br />
            <button name="Botão Adicionais">Filé e Provolone _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ R$ 11,99</button>
        </div >
    );
}
