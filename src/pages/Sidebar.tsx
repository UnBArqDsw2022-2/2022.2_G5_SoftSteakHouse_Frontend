import { useNavigate } from "react-router-dom";
import './Sidebar.css';

const options = { "Página inicial": "/", "Cardápio": "/cardapio", "Mesas": "/gerenciamentomesas", "Ajuda": "/ajuda" };

export function Sidebar() {
    const navigate = useNavigate();

    function handleClick(link: string) {
        navigate(link);
    }

    return (
        <div className="sidebar">
            <div className="linha-vertical">
            </div >
            <div>
                {Object.entries(options).map(([name, link]) => {
                    return (
                        <div>
                            <button
                                onClick={() => handleClick(link)}
                                className="botoesSideBar"
                            >
                                <h3>{name}</h3>
                            </button>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}