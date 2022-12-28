import { useState } from "react";
import "./Login.css";
import { User } from 'react-feather';

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

function onChangePassword(password: string) {
    if(password.length > 8) return;
    setUser({...user, password: password});
}

function onChangeEmail(email: string) {
    if(email.length > 8) return;
    setUser({...user, password: email});
}


    function onSubmit() {
         console.log('ok');
    }
    return (
        <body>
            <form onSubmit={onSubmit}>
                <section>
                    <User color="white" size={150} stroke-width="1" />
                </section>               
                <section>
                    <div className="input-container">
                        <input placeholder="Usuário" onChange={(e) => onChangeEmail(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <input type="password" placeholder="Senha" onChange={(e) => onChangePassword(e.target.value)}/>
                    </div>
                </section>
                <section>
                    <div className="submit-div">
                        <button type="submit" className="submit-button"><span>Entrar</span></button>
                    </div>
                    <div className="submit-div">
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                </section>
            </form>
        </body>
    );
}