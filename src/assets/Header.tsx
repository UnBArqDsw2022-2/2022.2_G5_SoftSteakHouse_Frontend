import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../pages/PaginaInicial.css';
import '../pages/Sidebar'
import { Sidebar } from '../pages/Sidebar';
import { useState } from 'react';

export const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    function handleClick() {
        setShowSidebar(!showSidebar);
    }

    return (
        <header>
            {showSidebar && <Sidebar />}
            <p></p>
            <span onClick={handleClick}>
                <FontAwesomeIcon className="menu" icon={faBars} />
            </span>
            <span>
                <FontAwesomeIcon className="singIn" icon={faUser} />
            </span>
            <br />
            <hr />
            <br />
        </header>
    );
}