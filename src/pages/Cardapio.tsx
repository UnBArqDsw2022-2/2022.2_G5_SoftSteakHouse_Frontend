import "../App.css"
import { Header } from "../assets/Header";
import './PaginaInicial';
import cavalo from "../assets/cavalo.jpg";


export function Cardapio() {
    return (
        <div>
            <Header/>
            <body>
                <div id="pesquisa">
                    Pesquisa <i className="fa-regular fa-magnifying-glass"></i>
                </div>
                <hr/>
                <div className="container">
                    <div className="row">
                        <h2>Entradas</h2>
                        <hr/>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                    <div>      
                        <h2>Refeições</h2>
                        <hr/>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
                            <div className="imgPrato">
                                <img className="img" src={cavalo}/>
                            </div>
                            <div className="conteudo">
                                <h3>Bife a cavalo</h3>
                                <p>Acompanha arroz, feijão de caldo e farofa. R$34,99 </p>
                            </div>
                        </div>
                        <div className="prato">
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
    );

}