import React, { useState,useEffect } from 'react';
import Header from "../../../../components/header/index";
import './index.css'
import api from '../../../../services/api';
import {useHistory,useParams} from 'react-router-dom';

function EditVeiculo(){

    const {id} = useParams();
    const hist = useHistory();

    //formulario deve ser um componente para ser usado na página home
    const [veiculo,setVeiculo]=useState({});
    const [placa,setPlaca]=useState();
    const [chassi,setChassi]=useState();
    const [ano,setAno]=useState();
    const [modelo,setModelo]=useState();

    async function loadProfile(){
        const res = await api.get("/veiculo/"+id,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        })
        setChassi(res.data.chassi);
        setPlaca(res.data.placa);
        setModelo(res.data.modelo);
        setAno(res.data.ano);
        setVeiculo(res.data);

    }

    async function handleDelete(){
        try{
            await api.delete("/veiculo/"+id,{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            alert("Veículo deletado");
            hist.push("/");
        }catch(err){

        }
    }

    useEffect(()=>{
        loadProfile();
    },[])
    
    async function editarVeiculo(e){
        try{
            e.preventDefault();
            veiculo.chassi=chassi;
            veiculo.placa=placa;
            veiculo.ano=ano;
            veiculo.modelo=modelo;
            await api.put("/veiculo/"+id,veiculo,{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            alert("Veículo Editado");
            hist.push("/");
        }catch(err){

        }
        
    }
    

    return(
        <div>
            <Header text="Editar Veículo" auth={true}/>
            <h4 id="msg-cadastro">Editar os dados do Veículo:</h4>
            <form onSubmit={editarVeiculo}>
                <div className="content">
                    <div className="input-control">
                        <label htmlFor="modelo">Modelo:</label>
                        <input type="text" id="modelo" value={modelo} name="cad-modelo" required onChange={e => setModelo(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="chassi">Chassi:</label>
                        <input type="text" id="chassi" value={chassi} name="cad-chassi" disabled onChange={e => setChassi(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="ano">Ano:</label>
                        <input type="text" id="ano" value={ano} name="cad-ano" required onChange={e => setAno(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="placa">Placa:</label>
                        <input type="text" id="placa" value={placa} name="cad-placa" required onChange={e => setPlaca(e.target.value)}/>
                    </div>
                    <div className="submit">
                        <button type="submit" >Editar</button>
                    </div>
                </div>
            </form>
            <div class='delete'>
                <button onClick={handleDelete}>Excluir</button> 
            </div>
            <br></br>
        </div>
    );
}


export default EditVeiculo;