import './PaginaInicial.css';
import { Header } from "../assets/Header";
import cavalo from "../assets/cavalo.jpg";
import softsteak from "../assets/softsteak.jpg"

export function PaginaInicial() {
    return (
        <div>
            <Header/>
            <body>    
    <div className="container"> 
        <div className="row">
           <div id="left">
                <img className="softsteak"src={softsteak}/>
                <h2>Soft Steak House</h2>
            </div>
            <div id="right">
                <span>
                    <div id="pesquisa">
                        Pesquisa <i className="fa-regular fa-magnifying-glass"></i>
                    </div>
                    <i className="fa-regular fa-filter"></i>
                </span>
                <hr/>
                <h1>Destaques</h1>
                <div className="destaque">
                    <div className="imgPrato">
                        <img className="img" src={cavalo}/>
                    </div>
                    <div className="conteudo">
                        <h3>Bife a cavalo</h3>
                        <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                    </div>
                </div>
                <div className="destaque">
                    <div className="imgPrato">
                        <img className="img" src={cavalo}/>
                    </div>
                    <div className="conteudo">
                        <h3>Bife a cavalo</h3>
                        <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                    </div>
                </div>
                <div className="destaque">
                    <div className="imgPrato">
                        <img className="img" src={cavalo}/>
                    </div>
                    <div className="conteudo">
                        <h3>Bife a cavalo</h3>
                        <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                    </div>
                </div>
                <div className="destaque">
                    <div className="imgPrato">
                        <img className="img" src={cavalo}/>
                    </div>
                    <div className="conteudo">
                        <h3>Bife a cavalo</h3>
                        <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                    </div>
                </div>
                <div className="destaque">
                    <div className="imgPrato">
                        <img className="img" src={cavalo}/>
                    </div>
                    <div className="conteudo">
                        <h3>Bife a cavalo</h3>
                        <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                    </div>
                </div>
                <div className="destaque">
                    <div className="imgPrato">
                        <img className="img" src={cavalo}/>
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