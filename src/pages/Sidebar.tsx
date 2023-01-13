import { Link } from "react-router-dom";

const options = { "Página inicial": "/", "Cardápio": "/cardapio", "Mesas": "/gerenciamentomesas", "Ajuda": "/ajuda" };

export function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                {Object.entries(options).map(([name, link]) => (
                    <li key={name}>
                        <Link to={link}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
