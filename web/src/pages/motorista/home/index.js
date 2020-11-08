import React,{useState,useEffect} from 'react';
import Header from "../../../components/header/index";
import logoWork from "../../../assets/logo-work.png";
import imagemPerfil from '../../../assets/imagem-perfil.png';
import './index.css';
import api from '../../../services/api';
import getCargo from '../../../utils/getCargo';

function MotoristaPage(){

    const [profile,setProfile]=useState({});

    useEffect(()=>{
        loadProfile();
    },[])

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

    return(
        <section>
            <Header auth={true}/>
            <div className="triangulo-azul"></div>
            <img src={logoWork} alt="Logo iacit" className="logo-iacit-work"/>
            <section className="section-dados-perfil">
                <img src={imagemPerfil} alt="Imagem de perfil do usuário" className="imagem-perfil"/>
                <div className="div-dados-perfil">
                    <p className="nome-perfil">Nome: {profile.nome}</p>
                    <p className="dados-perfil">Cargo: {profile.cargo} </p>
                    <p className="dados-perfil">CPF: {profile.cpf} </p>
                    <p className="dados-perfil">Matrícula: {profile.matricula} </p>
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

export default MotoristaPage;