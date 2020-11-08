import React, { useState,useEffect } from 'react';
import Header from "../../../components/header/index";
import './index.css'
import imagemPerfil from "../../../assets/imagem-perfil.png";
import api from '../../../services/api';
import {useHistory,useParams} from 'react-router-dom';

function Edit(){

    const {id} = useParams();
    const hist = useHistory();

    //formulario deve ser um componente para ser usado na página home
    const [user,setUser]=useState({});
    const [nome,setNome]=useState();
    const [cpf,setCpf]=useState();
    const [email,setEmail]=useState();
    const [matricula,setMatricula]=useState();
    const [telefone,setTelefone]=useState();
    const [endereco,setEndereco]=useState();

    async function loadProfile(){
        const res = await api.get("/user/"+id,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        })
        setNome(res.data.nome);
        setCpf(res.data.cpf);
        setEmail(res.data.email);
        setMatricula(res.data.matricula);
        setTelefone(res.data.telefone);
        setEndereco(res.data.endereco);
        setUser(res.data);
    }

    async function handleDelete(){
        try{
            await api.delete("/user/"+id,{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            alert("Colaborador deletado");
            hist.push("/");
        }catch(err){

        }
    }

    useEffect(()=>{
        loadProfile();
    },[])
    
    async function cadastrar(e){
        try{
            e.preventDefault();
            user.matricula=matricula;
            user.cpf=cpf;
            user.email=email;
            user.endereco=endereco;
            user.nome=nome;
            user.telefone=telefone;
            await api.put("/user/"+id,user,{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            alert("Colaborador Editado");
            hist.push("/");
        }catch(err){

        }
        
    }
    

    return(
        <div>
            <Header text="Cadastro de Motorista" auth={true}/>
            <h4 id="msg-cadastro">Editar os dados do Colaborador:</h4>
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
                        <input type="number" id="matricula" value={matricula} name="cad-matricula" disabled onChange={e => setMatricula(e.target.value)}/>
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


export default Edit;