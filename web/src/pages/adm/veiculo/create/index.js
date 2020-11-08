import React, { useEffect, useState } from 'react';
import Header from "../../../../components/header/index";
import './index.css'
import imagemPerfil from "../../../../assets/imagem-perfil.png";
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';


import api from "../../../../services/api";

function Createveiculo(){

    const hist = useHistory();

    //formulario deve ser um componente para ser usado na página home
    const [placa,setPlaca]=useState();
    const [modelo,setModelo]=useState();
    const [ano,setAno]=useState();
    const [chassi,setChassi]=useState();
    const [veiculos,setVeiculos]=useState([]);

    
    async function loadVeiculos(){
        try{
            const res = await api.get("/veiculo/index",{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            var result = [];
            for(let i in res.data){
                result.push(
                    {
                        chassi:res.data[i].chassi,
                        placa:res.data[i].placa,
                        modelo:res.data[i].modelo,
                        ano:res.data[i].ano
                    }
                );
            }
            setVeiculos(result);
        }catch(err){

        }
    }

    async function cadastrarveiculo(e){
        
        e.preventDefault();
        const veiculo = {
            placa:placa,
            modelo:modelo,
            ano:ano,
            chassi: chassi
        }
        const res = await api.post(
            '/veiculo',
            veiculo,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + localStorage.getItem("token")   
                }
            }
        )
        alert("Novo veiculo cadastrado");
            
    }

    useEffect(async()=>{
        loadVeiculos()
    },[])
    
    return(
        <div>
            <Header text="Cadastro de Veículo" auth={true}/>
            <h4 id="msg-cadastro">Insira os dados cadastrais do veiculo:</h4>
            <form onSubmit={cadastrarveiculo}>
                <div className="content">
                    <div className="input-control">
                        <label htmlFor="chassi">Número do chassi:</label>
                        <input type="text" id="chassi" value={chassi} name="cad-chassi" required onChange={e => setChassi(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="placa">Placa:</label>
                        <input type="text" id="placa" value={placa} name="cad-placa" required onChange={e => setPlaca(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="modelo">Modelo:</label>
                        <input type="text" id="modelo" value={modelo} name="cad-modelo" required onChange={e => setModelo(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="ano">Ano:</label>
                        <input type="text" id="ano" value={ano} name="cad-ano" required onChange={e => setAno(e.target.value)}/>
                    </div>
                    <div className="submit">
                        <button type="submit" style={{marginTop:'2rem'}}>CADASTRAR</button>
                    </div>
                </div>
            </form> 
            <p className="frase-adm">Veículos Cadastrados</p>
            <section>
                {(veiculos.length>0)?(
                     <div className="lista-resultados" id="exibirVeiculos">
                         {veiculos.map(veiculo=>(
                             <div className="colaborador-pesquisa" key={veiculo.chassi}>
                                <label className="indice-nome">MODELO:</label>
                                <label className="dados-pesquisa-nome" >{veiculo.modelo}</label>
                                <label className="indice-cargo">CHASSI:</label>
                                <label className="dados-pesquisa-cargo">{veiculo.chassi}</label>
                                <label className="indice-cargo">ANO:</label>
                                <label className="dados-pesquisa-cargo">{veiculo.ano}</label>
                                <label className="indice-cargo">PLACA:</label>
                                <label className="dados-pesquisa-cargo">{veiculo.placa}</label>
                                <Link className="botao-perfil" to={"/administrador/veiculo/edit/"+veiculo.placa}>EDITAR</Link>
                            </div>
                         ))}
                     </div>
                ):(
                    <h2 style={{textAlign:"center"}}>Nenhum colaborador encontrado</h2>
                )}

            </section>
        </div>
    );
    
}

export default Createveiculo;