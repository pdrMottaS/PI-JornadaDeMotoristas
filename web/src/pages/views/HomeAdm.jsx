import React, { Component } from 'react';
import Header from "../../components/header/index";
import imagemPerfil from '../../assets/imagem-perfil.png';
import iconeLupa from "../../assets/icone-lupa.png";
import logoWork from "../../assets/logo-work.png";
import '../styles/page-adm.css'
import { Link } from 'react-router-dom';

class HomeAdm extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
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
                    </div>
                </section>
                <section className="botoes-administrativo">
                    <Link to="/registerMotorista">
                        <button className="botao-motorista">Cadastrar Motorista</button>
                    </Link>
                    <Link to="registerAdm">
                        <button className="botao-administrador">Cadastrar Administrador</button>
                    </Link>
                    <Link to="registerVeiculo">
                        <button className="botao-veiculo">Cadastrar Veículo</button>
                    </Link>
                    <Link to="registerFinanceiro">
                        <button className="botao-financeiro">Cadastrar Financeiro</button>
                    </Link>
                </section>
                <p className="frase-adm">Colaboradores</p>
                <section className="pesquisa-administrativo">
                    <input type="text" name="procura" id="procura-adm" className="procura-adm"/>
                    <div className="div-botao-procurar">
                        <button className="botao-procurar">Procurar</button>
                        <img src={iconeLupa} alt="imagem de lupa." className="imagem-lupa"/>
                    </div>
                </section>
                <section>
                    <div className="lista-resultados">
                        <div className="colaborador-pesquisa">
                            <div className="div-perfil-pesquisa">
                                <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                            </div>
                            <label className="indice-nome">NOME:</label>
                            <label className="dados-pesquisa-nome">Joãozin</label>
                            <label className="indice-cargo">CARGO:</label>
                            <label className="dados-pesquisa-cargo">Motorista</label>
                            <button className="botao-perfil">EDITAR</button>
                        </div>
                    </div>
                </section>
                <section className="form-edita-adm">
                    <form>
                        <div className="form-adm">
                            <div className="text-esquerda">
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" />
                                <label htmlFor="email">E-mail:</label>
                                <input type="text" id="email" />
                                <label htmlFor="cargo">Cargo:</label>
                                <input type="text" id="cargo" />
                                <label htmlFor="cargo">Matrícula</label>
                                <input type="text" id="matricula" />
                            </div>
                            <div className="text-direita">
                                <label htmlFor="telefone">Telefone:</label>
                                <input type="text" id="telefone" />
                                <label htmlFor="salario">ID do veículo atual:</label>
                                <input type="text" id="id-veiculo" />
                                <label htmlFor="endereco">Endereço:</label>
                                <input type="text" id="endereco" />
                                <label htmlFor="cargo">Cargo: </label>
                                <input type="text" id="cargo" />
                            </div>
                            <div className="btn-container">
                                <button type="submit">Salvar Modificação</button>
                            </div>
                            
                        </div>                        
                    </form>
                </section>
            </div>
         );
    }
}
 
export default HomeAdm;