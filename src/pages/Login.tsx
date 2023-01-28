import { useState } from "react";
import "./Login.css";
import { User } from 'react-feather';
import { useNavigate } from "react-router-dom";
import { api } from "../hooks/useFetch";
import { Header } from "../assets/Header";

type User = {
    username: String,
    password: String,
}


export function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User>({
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
            api.post('/token', user)
                .then(({data}) => {
                    localStorage.setItem("accessToken", data?.access);
                    localStorage.setItem("refreshToken", data?.refresh);
            
                    api.defaults.headers.common['token'] = data?.access;
                    navigate("/telaPrincipal");
                })
                .catch(ex => alert("Usuário ou senha incorreta!"))
        } catch (error) {
            alert(error);
            setLoading(true);
        }
    }
    return (
        <div className="PaginaLoginBody">
            <Header />
            <div className="PaginaLoginForm" onSubmit={onSubmit}>
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
                        <button onClick={onSubmit} type="submit" disabled={loading} className="submit-button"><span>{loading? "Carregando...": "Entrar"}</span></button>
                    </div>
                    <div className="submit-div">
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                </section>
            </div>
        </div>
    );
}