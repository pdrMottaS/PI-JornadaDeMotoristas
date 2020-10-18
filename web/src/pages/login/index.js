import React,{useState} from 'react';
import Header from '../../components/header/index';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import getRole from '../../utils/getRole';
import logoLogin from '../../assets/logo-caminhao-login.png';
import './index.css';

function LoginPage(){

    const [login,setLogin]=useState();
    const [senha,setSenha]=useState();
    const hist = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const res = await api.post("/session",{login:login,senha:senha});
            localStorage.setItem("token",res.data.Token);
            localStorage.setItem("role",res.data.Role);
            localStorage.setItem("id",res.data.Id);
            const link = getRole();
            hist.push(link);
        }catch(err){
            alert("Login ou senha inválida");
        }
    }

    return ( 
        <section>
            <Header auth={false}/>
            <section className="fundo-login">
                <section className="div-login">
                    <hr className="linha-login"/>
                    <div className="fundo-logo-login">
                        <img src={logoLogin} alt="Icone de um caminhão azul." className="logo-login"/>
                    </div>
                    <p className="login">LOGIN</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="login" className="label-login">Login:</label>
                        <input type="text" id="login" value={login} className="input-login" onChange={e=>{setLogin(e.target.value)}}/>
                        <label htmlFor="senha" className="label-login">Senha:</label>
                        <input type="password" id="senha" value={senha} className="input-login" onChange={e=>{setSenha(e.target.value)}}/>
                        <button className="botao-login"  type="submit" >Entrar</button>
                    </form>
                </section>
            </section>
        </section>
    );
}

export default LoginPage;