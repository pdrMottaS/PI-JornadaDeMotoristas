import React, { Component } from 'react';
import imagemPerfil from '../../assets/imagem-perfil.png';
import logoWork from '../../assets/logo-work.png';
import Header from '../../components/header/index';
import iconeLupa from '../../assets/icone-lupa.png';
import '../styles/page-financeiro.css';

class HomeFinanceiro extends Component {
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
                <section className="colaboradores-financeiro">
                    <p className="frase-adm">Situação Colaboradores</p>
                    <hr className="linha"/>
                    <div className="colaborador-pesquisa">
                            <div className="div-perfil-pesquisa">
                                <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                            </div>
                            <p className="dados-colaborador-nome">Joãozin</p>
                            <p className="dados-colaborador-atrasado">PAGAMENTO ATRASADO</p>
                    </div>
                    <div className="colaborador-pesquisa">
                            <div className="div-perfil-pesquisa">
                                <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                            </div>
                            <p className="dados-colaborador-nome">Cleitin</p>
                            <p className="dados-colaborador-proximo">PAGAMENTO PRÓXIMO</p>
                    </div>
                </section>
                <p className="frase-adm">Procurar Colaboradores:</p>
                <section className="pesquisa-financeiro">
                    <input type="text" name="procura" id="procura-adm" className="barra-pesquisa"/>
                    <div className="div-botao-procurar">
                        <button className="botao-procurar">Procurar</button>
                        <img src={iconeLupa} alt="imagem de lupa." className="imagem-lupa"/>
                    </div>
                </section>
                <section className="form-edita-financeiro">
                    <form>
                        <div className="form-financeiro">
                            <img src={imagemPerfil} alt="Placeholder da imagem de perfil."/>
                            <p>PAGAMENTO EM DIA</p>
                            <div className="text-esquerda">
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" disabled/>
                                <label htmlFor="email">E-mail:</label>
                                <input type="text" id="email" disabled/>
                                <label htmlFor="cargo">Cargo:</label>
                                <input type="text" id="cargo" disabled/>
                                <label htmlFor="cargo">Último pagamento:</label>
                                <input type="text" id="cargo" disabled/>
                            </div>
                            <div className="text-direita">
                                <label htmlFor="telefone">Telefone:</label>
                                <input type="text" id="telefone" disabled/>
                                <label htmlFor="salario">Salário:</label>
                                <input type="text" id="salario" disabled/>
                                <label htmlFor="endereco">Endereço:</label>
                                <input type="text" id="endereco" disabled/>
                                <label htmlFor="cargo">Próximo pagamento:</label>
                                <input type="text" id="cargo" placeholder="Entre com o salário aqui"/>
                            </div>
                            <div className="btn-container">
                                <button type="submit">Editar</button>
                                <button >Fechar</button>
                            </div>
                            
                        </div>                        
                    </form>
                    
                </section>
            </section>
          );
    }
}
 
export default HomeFinanceiro;