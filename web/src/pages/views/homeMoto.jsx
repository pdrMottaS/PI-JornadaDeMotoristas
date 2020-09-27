import React, { Component } from 'react';
import Header from "../../components/header/index";
import logoWork from "../../assets/logo-work.png";
import imagemPerfil from '../../assets/imagem-perfil.png';
import '../styles/page-motorista.css';

class HomeMoto extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <Header auth={true}/>
                <div className="triangulo-azul"></div>
                <img src={logoWork} alt="Logo iacit" className="logo-iacit-work"/>
                <section className="section-dados-perfil">
                    <img src={imagemPerfil} alt="Imagem de perfil do usuário" className="imagem-perfil"/>
                    <div className="div-dados-perfil">
                        <p className="nome-perfil">Puxar o nome do banco</p>
                        <p className="dados-perfil">Cargo</p>
                        <p className="dados-perfil">CPF</p>
                        <p className="dados-perfil">Matrícula</p>
                        <p className="dados-perfil">Id do Veículo</p>
                    </div>
                </section>
                <section className="jornada-motorista">
                    <p className="titulo-jornada">Jornada</p>
                    <p className="alerta-jornada">ATRASADO</p>
                    <p align="center">12 minutos atrasado</p>
                    <hr className="linha"/>
                    <p>Contratante:</p>
                    <p>Endereço:</p>
                    <div className="dados-endereco">
                        <p>Cidade:</p>
                        <p>Rua:</p>
                        <p>Número:</p>
                    </div>
                </section>
                <p className="frase-adm">Avisar</p>
                <br/>
                <section className="div-aviso-motorista">
                    <label for="tipos">Tipo de Aviso:  </label>
                    <select name="tipos" id="tipos">
                        <option value="eng">Engarrafamento</option>
                        <option value="prob">Problema no veículo</option>
                        <option value="saude">Problema de Saúde</option>
                    </select>
                    <br/>
                    <label htmlFor="desc">Descrição:</label>
                    <br/>
                    <textarea name="descricao" id="desc" cols="30" rows="10" className="textarea-descricao"/>
                    <br/>
                    <button className="botao-aviso">Enviar Aviso</button>
                </section>
            </section>
         );
    }
}
 
export default HomeMoto;