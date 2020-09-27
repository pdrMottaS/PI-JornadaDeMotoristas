import React, { Component } from 'react';
import Header from "../../components/header/index";
import { Link } from 'react-router-dom';
import '../styles/page-menu-dev.css'

class MenuDev extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <Header auth={true}/>
                <section className="menu">
                    <h1 className="titulo-menu">Menu de Login</h1>
                    <p className="texto-menu">Quando forem criar uma nova tela de area de trabalho adionem um link nessa lista.</p>
                    <p className="texto-menu">A lista está no diretório src/pages/public/menudev/menudev.jsx</p>
                    <p className="texto-menu">Não esqueçam de adiocionar uma nova rota lá no routes.js que está na pasta src.</p>
                    <ul className="lista-menu">
                        <li>
                            <Link to="/adm">Area de trabalho do administrativo</Link>
                        </li>
                        <li>
                            <Link to="/motorista">Area de trabalho do Motorista</Link>
                        </li>
                        <li>
                            <Link to="/financeiro">Area de trabalho do Financeiro</Link>
                        </li>
                    </ul>
                </section>
            </section>
         );
    }
}
 
export default MenuDev;