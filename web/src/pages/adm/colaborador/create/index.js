import React, { useState } from 'react';
import Header from "../../../../components/header/index";

import './index.css'
import imagemPerfil from "../../../../assets/imagem-perfil.png";
import api from '../../../../services/api';
import {useHistory} from 'react-router-dom';
import getCargo from '../../../../utils/getCargo'

function CreateColaborador(){
    

    const hist = useHistory();
    //formulario deve ser um componente para ser usado na página home
    const [nome,setNome]=useState();
    const [cpf,setCpf]=useState();
    const [email,setEmail]=useState();
    const [matricula,setMatricula]=useState();
    const [telefone,setTelefone]=useState();
    const [endereco,setEndereco]=useState();
    const [inputCargo,setInputCargo]=useState();

    

    
    async function cadastrar(e){
        try{
            e.preventDefault();
            const user = {
                matricula:matricula,
                cpf:cpf,
                email:email,
                endereco:endereco,
                login:cpf,
                nome:nome,
                senha:cpf,
                telefone:telefone,
                roles: [{
                    id: Number(inputCargo)
                }]
            }

            const cargo = getCargo(inputCargo)
            
            await api.post("/user",user,{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            alert("Novo "+cargo+" cadastrado");
            hist.push("/")
            
        }catch(err){
            console.log(err);
        }
    }
    

    return(
        <div>
            <Header text="Cadastro de Colaborador" auth={true}/>
            <h4 id="msg-cadastro">Insira os dados cadastrais do colaborador:</h4>
            <form onSubmit={cadastrar}>
                <div className="content">
                    <section className="imagem-cadastro">
                        <picture>
                            <input type="image" src={imagemPerfil} alt="Enviar Foto" name="cad-image" />
                            <br/>
                            <center>Entre com a imagem</center>
                        </picture>
                    </section>
                    <div className="input-control">
                        <label htmlFor="nome">Nome Completo:</label>
                        <input type="text" id="nome" value={nome} name="cad-nome" required onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="matricula">Nº da matrícula:</label>
                        <input type="number" id="matricula" value={matricula} name="cad-matricula" required onChange={e => setMatricula(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" value={cpf} name="cad-cpf" required onChange={e => setCpf(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" value={email} name="cad-email" required onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" id="endereco" value={endereco} name="cad-endereco" required onChange={e => setEndereco(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" id="telefone" value={telefone} name="cad-telefone" required onChange={e => setTelefone(e.target.value)}/>
                    </div>
                    <select type="text" value = {inputCargo} name="cad-cargo" required onChange={e => setInputCargo(e.target.value)} id="cad-cargo">
                        <option value="1" defaultValue>Administrador</option>
                        <option value="2">Financeiro</option>
                        <option value="3">Gerente</option>
                        <option value="4">Motorista</option>
                    </select>
                    
                    <div className="submit">
                        <button type="submit" >CADASTRAR COLABORADOR</button>
                    </div>
                </div>
            </form> 
           
        </div>
    );
}


export default CreateColaborador;