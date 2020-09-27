import React, { Component } from 'react';
import Header from "../../components/header/index";
import logoLogin from '../../assets/logo-caminhao-login.png';
import '../styles/page-login.css';
import { Link } from 'react-router-dom';
import CreateSession from '../scripts/createSession';

class Login extends Component {
    state = {
        cpf :'',
        senha: ''
    }

    render() { 
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
                        <CreateSession/>
                        <hr className="linha-login"/>
                    </section>
                </section>
            </section>
         );
    }
}
 
export default Login;