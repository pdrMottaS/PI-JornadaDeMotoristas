import React, { useEffect } from 'react';
import Header from "../../../components/header/index";
import imagemPerfil from '../../../assets/imagem-perfil.png';
import iconeLupa from "../../../assets/icone-lupa.png";
import logoWork from "../../../assets/logo-work.png";
import '../../adm/home/index.css'
import '../styles/page-gm.css'
import { Link } from 'react-router-dom';
import api from '../../../services/backend';

function HomeGM(){

    useEffect(async()=>{
        const res = await api.get("/motorista/index",
        {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        });
        console.log(res);
    },[])

    // getMotoristaLista = async () => {
    //     try {
    //       const response = await api.get('/motoristas'); <- não sei o nome certo da api q vcs tao usando
    
    //       const { motoristas } = response.data;
    
    //       this.setState({ motoristas });
    //     } catch (err) {
    //       this.setState({ errorMessage: err.data.error });
    //     }
    //   };
    
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
            <p className="frase-adm">Viagens</p>
            <section className="pesquisa-administrativo">
                <input type="text" name="procura" id="procura-adm" className="procura-adm"/>
                <div className="div-botao-procurar">
                    <button className="botao-procurar">Procurar</button>
                    <img src={iconeLupa} alt="imagem de lupa." className="imagem-lupa"/>
                </div>
            </section>
            <section>
                <div className="lista-resultados">
                    {/* { this.state.motoristas.map(motorista => (
                        <View key={motorista.matricula} style={{ marginTop: 15 }}>
                            <div className="colaborador-pesquisa">
                                <div className="div-perfil-pesquisa">
                                    <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                                </div>
                                <label className="indice-nome">NOME:</label>
                                <label className="dados-pesquisa-nome">{motorista.nome}</label>
                                <label className="indice-cargo">CARGO:</label>
                                <label className="dados-pesquisa-cargo">{motorista.cargo}</label>
                                <button className="botao-perfil">EDITAR</button>
                            </div>
                        </View>
                     ))} */}
                    <div className="colaborador-pesquisa">
                        <div className="viagem-informacao">
                            <label>ID da Jornada: {/* coloca os bangi do banco aki*/}</label> 
                            <label>Contratante: {/* coloca os bangi do banco aki*/}</label>
                            <label>Carga: {/* coloca os bangi do banco aki*/}</label>
                            <label>Endereço de chegada: {/* coloca os bangi do banco aki*/}</label>
                            <label>Motorista: {/* coloca os bangi do banco aki*/}</label>
                            <label>Placa do veículo: {/* coloca os bangi do banco aki*/}</label>
                        </div>
                        <div className="informacao-jornada">
                            <label className="status-viagem"> ATRASADO{/* coloca os bangi do status da viagem aki*/}</label>
                            <label className="problemas-viagem">Problema no Veículo{/* coloca os bangi dos avisos da viagem aki*/}</label>
                            <button className="botao-contato-viagem">CONTATAR</button>
                        </div>
                    </div>
                </div>
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
                    {/* { this.state.motoristas.map(motorista => (
                        <View key={motorista.matricula} style={{ marginTop: 15 }}>
                            <div className="colaborador-pesquisa">
                                <div className="div-perfil-pesquisa">
                                    <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                                </div>
                                <label className="indice-nome">NOME:</label>
                                <label className="dados-pesquisa-nome">{motorista.nome}</label>
                                <label className="indice-cargo">CARGO:</label>
                                <label className="dados-pesquisa-cargo">{motorista.cargo}</label>
                                <button className="botao-perfil">EDITAR</button>
                            </div>
                        </View>
                     ))} */}
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
 
export default HomeGM;