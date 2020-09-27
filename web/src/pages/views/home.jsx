import React, { Component } from 'react';
import Header from "../../components/header/index";
import '../styles/page-home.css';
import iconeCaminhao from '../../assets/icone-caminhao-home.png';
import iconeOlho from '../../assets/icone-olho.png';
import iconePapel from '../../assets/icone-papeis.png';
import logoHome from '../../assets/logo-home.png';
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <Header auth={false}/>
                    <section className="imagem-caminhao">
                        <img src={logoHome} alt="Logo da iacit" className="logo-home"/>
                        <section className="quadrado-sobre">
                            <p className="titulo-sobre-home">Sobre nos</p>
                            <p className="texto-sobre-home">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trabalhamos com a capacitação tecnológica para o desenvolvimento de produtos e sistemas aplicados ao Auxílio, Controle e Gerenciamento do Tráfego Aéreo (CNS/ATM) e Marítimo; Meteorologia Radar; Telemetria; Redes Integradas; Comunicação; Defesa e Segurança Pública.</p>
                        </section>
                    </section>
                    <section className="barra-home">
                        <p className="texto-barra">TRABALHA AQUI? CLIQUE EM ENTRAR PARA ACESSAR SUA AREA DE TRABALHO<Link to="/login"><button className="botao-barra">ENTRAR</button></Link></p>
                    </section>
                    <section className="corpo-home">
                        <section className="icones-texto-home">
                            <div className="icone-home">
                                <img className="icone-caminhao-home" src={iconeCaminhao} lat="icone de caminhão"/>
                            </div>
                            <p className="texto-home">Transportes Rápidos e seguros</p>
                        </section>
                        <section className="icones-texto-home">
                            <div className="icone-home">
                                <img className="icone-caminhao-home" src={iconeOlho} lat="icone de caminhão"/>
                            </div>
                            <p className="texto-home">Supervisão 24 horas pelo nosso sistema</p>
                        </section>
                        <section className="icones-texto-home">
                            <div className="icone-home">
                                <img className="icone-caminhao-home" src={iconePapel} lat="icone de caminhão"/>
                            </div>
                            <p className="texto-home">Operações com relatórios completos</p>
                        </section>
                    </section>
            </section>
        );
    }
}
 
export default Home;