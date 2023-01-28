import { useState } from "react";
import "./Login.css";
import { User } from 'react-feather';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { LoginUser } from "../provider/authProvider";



export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<LoginUser>({
        username: "",
        password: ""
    });

    function onChangePassword(password: string) {
        if(password.length > 8) return;
        setUser({...user, password: password});
    }

    function onChangeEmail(username: string) {
        if(username.length > 8) return;
        setUser({...user, username: username});
    }


    function onSubmit() {
        setLoading(true);
        try {
            login(user);
            navigate("/telaPrincipal");
        } catch (error) {
            alert(error);
            setLoading(true);
        }
    }
    return (
        <div className="PaginaLoginBody">
            <form className="PaginaLoginForm" onSubmit={onSubmit}>
                <section className="PaginaLoginSection">
                    <User color="white" size={150} stroke-width="1" />
                </section>               
                <section className="PaginaLoginSection">
                    <div className="input-container">
                        <input className="PaginaLoginInput" placeholder="Usuário" onChange={(e) => onChangeEmail(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <input className="PaginaLoginInput" type="password" placeholder="Senha" onChange={(e) => onChangePassword(e.target.value)}/>
                    </div>
                </section>
                <section className="PaginaLoginSection">
                    <div className="submit-div">
                        <button type="submit" disabled={loading} className="submit-button"><span>{loading? "Carregando...": "Entrar"}</span></button>
                    </div>
                    <div className="submit-div">
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                </section>
            </form>
        </div>
    );
}