import React, { Component, useState } from 'react';
import Header from "../../../../components/header/index";
import './index.css'
import imagemPerfil from "../../../../assets/imagem-perfil.png";
import {useHistory} from 'react-router-dom';

import api from "../../../../services/api";

function Createveiculo(){

    const hist = useHistory();

    //formulario deve ser um componente para ser usado na página home
    const [placa,setPlaca]=useState();
    const [modelo,setModelo]=useState();
    const [ano,setAno]=useState();
    const [chassi,setChassi]=useState();
    
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
        hist.push("/");
            
    }


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
        </div>
    );
    
}

export default Createveiculo;