import React,{useState} from 'react';
import '../styles/page-login.css';
import axios from 'axios';
import api from '../../services/backend';
import {useHistory} from 'react-router-dom'

function CreateSession(){

    const hist = useHistory();

    const [login,setLogin]=useState();
    const [senha,setSenha]=useState();

    async function handleSubmit(e){
        e.preventDefault();

        console.log(login,senha);

        //set config
        const config ={
            headers:{
                "Authorization": login+":"+senha
            }
        }

        try{
            const res = await api.post("/session/create",{},config);
            localStorage.setItem("token",res.data.token);
            hist.push("/adm")
        }catch(err){
            console.log(err);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="cpf" className="label-login">CPF:</label>
            <input type="text" id="cpf" value={login} className="input-login" onChange={e=>{setLogin(e.target.value)}}/>
            <label htmlFor="senha" className="label-login">Senha:</label>
            <input type="text" id="cpf" value={senha} className="input-login" onChange={e=>{setSenha(e.target.value)}}/>
            <button className="botao-login"  type="submit" >Entrar</button>
        </form>
    );
}

export default CreateSession;
