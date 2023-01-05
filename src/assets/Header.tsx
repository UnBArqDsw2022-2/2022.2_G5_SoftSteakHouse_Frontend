import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons'; 
import '../pages/PaginaInicial.css';

export const Header = () => {
    return (
        <header>
            <span>
            <FontAwesomeIcon className="menu" icon={faBars} />
            <FontAwesomeIcon className="singIn" icon={faUser}/>
            </span>
            <br/>
            <hr/>
            <br/>
        </header>

    );
}