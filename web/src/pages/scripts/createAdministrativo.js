import React, { Component, useState } from 'react';
import Header from "../../components/header/index";
import FormCad from "../../components/formCadastro/formCadastro"
import '../styles/page-form-cadastro.css'
import imagemPerfil from "../../assets/imagem-perfil.png";

import api from '../../services/backend'



function CreateAdm(){
    //formulario deve ser um componente para ser usado na página home
    const [nome,setNome]=useState();
    const [cpf,setCpf]=useState();
    const [email,setEmail]=useState();
    
    async function cadastrarAdm(e){
        
        e.preventDefault();

        let userAdm = new Object();
        userAdm = {
            nome:nome,
            email:email,
            cpf:cpf,       
            senha:cpf,
            login:cpf
        }
        
        
        console.log(userAdm);
            const res = await api.post(
                '/administrador/create/',
                userAdm,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 556b4610-45ff-4d60-a041-e8d2c447e70f`
                    }
                }
            )
            
        }


    return(
        <div>
            <Header text="Cadastro do Administrativo" auth={true}/>
            <h4 id="msg-cadastro">Insira os dados cadastrais do Administrativo:</h4>
            <form onSubmit={cadastrarAdm}>
                <div className="content">
                    <section className="imagem-cadastro">
                        <picture>
                            <input type="image" src={imagemPerfil} alt="Enviar Foto" name="cad-image" />
                            <br/>
                            <center>Entre com a imagem</center>
                        </picture>
                    </section>
                    <FormCad label="Nome Completo: " htmlFor="nome">
                        <input type="text" id="nome" value={nome} name="cad-nome" required onChange={e => setNome(e.target.value)}/>
                    </FormCad>
                    <FormCad label="CPF: " htmlFor="cpf">
                        <input type="text" id="cpf" value={cpf} name="cad-cpf" required onChange={e => setCpf(e.target.value)}/>
                    </FormCad>
                    <FormCad label="Email: " htmlFor="email">
                        <input type="text" id="email" value={email} name="cad-email" required onChange={e => setEmail(e.target.value)}/>
                    </FormCad>
                    <FormCad label="Endereço: " htmlFor="enredeco">
                        <input type="text" id="endereco" name="cad-endereco" required/>
                    </FormCad>
                    <FormCad label="Telefone: " htmlFor="telefone">
                        <input type="text" id="telefone" name="cad-telefone" required/>
                    </FormCad>
                    <div className="submit">
                        <button type="submit" >CADASTRAR</button>
                    </div>
                </div>
            </form> 
        </div>
    );
    
}

export default CreateAdm;