import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import logoWork from "../../../assets/logo-work.png";
import imagemPerfil from '../../../assets/imagem-perfil.png';

import Header from '../../../components/header/index';

import api from '../../../services/api';
import getCargo from '../../../utils/getCargo';

function AdmPage(){

    const [profile,setProfile]=useState({});
    const [viagens,setViagens]=useState([]);
    const [colaboradores,setColaboradores]=useState([]);

    async function loadColaboradores(){
        try{
            const res = await api.get("/user/index",{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            var result = [];
            for(let i in res.data){
                if(res.data[i].matricula!=localStorage.getItem("id")){
                    var cargo = getCargo(res.data[i].roles[0].name);
                    result.push({nome:res.data[i].nome,cargo:cargo,matricula:res.data[i].matricula});
               }
            }
            setColaboradores(result);
        }catch(err){

        }
    }

    async function loadProfile(){
        try{
            const res = await api.get("/user/"+localStorage.getItem("id"),{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            });
            const cargo = getCargo(localStorage.getItem("role"));
            setProfile({
                matricula:res.data.matricula,
                cpf:res.data.cpf,
                nome:res.data.nome,
                cargo:cargo
            })
        }catch(err){

        }
    }

    async function loadViagens(){
        try{
            const v = await api.get("/jornada/index",{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            });
            console.log(v.data);
            setViagens(v.data);
        }catch(err){

        }
    }

    useEffect(async()=>{
        loadProfile();
        loadViagens();
        loadColaboradores();
    },[])


    return(
        <div>
            <Header auth={true}/>
            <div className="triangulo-azul"></div>
            <img src={logoWork} alt="Logo iacit" className="logo-iacit-work"/>
            <section className="section-dados-perfil">
                <img src={imagemPerfil} alt="Imagem de perfil do usuário" className="imagem-perfil"/>
                <div className="div-dados-perfil" id="div-dados-perfil">
                    <div>
                        <p className="nome-perfil">Nome: {profile.nome}</p>
                        <p className="dados-perfil">Cargo: {profile.cargo} </p>
                        <p className="dados-perfil">CPF: {profile.cpf} </p>
                        <p className="dados-perfil">Matrícula: {profile.matricula} </p>
                    </div>
                </div>
            </section>
            <section className="botoes-administrativo">
                <Link to="/administrador/motorista">
                    <button className="botao-motorista">Cadastrar Motorista</button>
                </Link>
                <Link to="registerAdm">
                    <button className="botao-administrador">Cadastrar Administrador</button>
                </Link>
                <Link to="/administrador/veiculo">
                    <button className="botao-veiculo">Cadastrar Veículo</button>
                </Link>
                <Link to="registerFinanceiro">
                    <button className="botao-financeiro">Cadastrar Financeiro</button>
                </Link>
            </section>
            <br></br>
            <p className="frase-adm">Colaboradores</p>
            <section>
                {(colaboradores.length>0)?(
                     <div className="lista-resultados" id="exibirColabs">
                         {colaboradores.map(colaborador=>(
                             <div className="colaborador-pesquisa" key={colaborador.matricula}>
                                <div className="div-perfil-pesquisa">
                                    <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                                </div>
                                <label className="indice-nome">NOME:</label>
                                <label className="dados-pesquisa-nome" >{colaborador.nome}</label>
                                <label className="indice-cargo">CARGO:</label>
                                <label className="dados-pesquisa-cargo">{colaborador.cargo}</label>
                                <Link className="botao-perfil" to={"/administrador/edit/"+colaborador.matricula}>EDITAR</Link>
                            </div>
                         ))}
                     </div>
                ):(
                    <h2 style={{textAlign:"center"}}>Nenhum colaborador encontrado</h2>
                )}
            </section>
            <br></br>
            <p className="frase-adm">Viagens</p>
            <section>
                {(viagens.length>0)?(
                    <div className="lista-resultados">
                            {viagens.map(viagem=>(
                                <div className="colaborador-pesquisa" id="viagem-list" key={viagem.id}>
                                <div key={viagem.id}>
                                    <div className="viagem-informacao">
                                        <label>ID da Jornada: {viagem.id}</label> 
                                        <br></br>
                                        <label>Data de saída: {viagem.data_inicio}</label>
                                        <br></br>
                                        <label>Motorista: {viagem.motorista[0].nome}</label>
                                        <br></br>
                                        <label>Placa do veículo: {viagem.veiculo[0].placa}</label>
                                    </div>
                                </div>
                                </div>
                            ))}
                    </div>
                ):(
                    <h2 style={{textAlign:"center"}}>Nenhuma viagem agendada</h2>
                )}
            </section>
            <br></br>
        </div>
    );
}

export default AdmPage;