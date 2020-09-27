import React, { Component, useState } from 'react';
import Header from "../../components/header/index";
import FormCad from "../../components/formCadastro/formCadastro"
import '../styles/page-form-cadastro.css'
import imagemPerfil from "../../assets/imagem-perfil.png";

import api from '../../services/backend'



function CreateMotorista(){
    //formulario deve ser um componente para ser usado na página home
    const [nome,setNome]=useState();
    const [cpf,setCpf]=useState();
    const [email,setEmail]=useState();
    const [matricula,setMatricula]=useState();
    
    async function cadastrarMotorista(e){
        
        e.preventDefault();

        
        const userMotorista = {
            matricula:  matricula,
            cpf: cpf,
            email: email,
            nome: nome
        }
        
        
        console.log(userMotorista);
            const res = await api.post(
                '/motorista/create/',
                userMotorista,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            
        }


    return(
        <div>
            <Header text="Cadastro de Motorista" auth={true}/>
            <h4 id="msg-cadastro">Insira os dados cadastrais do Motorista:</h4>
            <form onSubmit={cadastrarMotorista}>
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
                    <FormCad label="Nº da matrícula: " htmlFor="matricula">
                        <input type="number" id="matricula" value={matricula} name="cad-matricula" required onChange={e => setMatricula(e.target.value)}/>
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

export default CreateMotorista;