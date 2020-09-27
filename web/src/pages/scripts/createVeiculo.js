//formulario deve ser um componente para ser usado na página home
import React from "react";
import Header from "../../components/header/index";
import '../styles/page-form-cadastro.css'

function CreateVeiculo(){
    //formulario deve ser um componente para ser usado na página home
    return(
        <div>
            <Header text="Cadastro de Veículo" auth={true}/>
            <div className="content">
                <h4 id="msg-cadastro">Insira os dados cadastrais do veículo:</h4>
                <form>
                    <div className="input-control">
                        <label for="modelo">Modelo do Caminhão:</label>
                        <input type="text" id="modelo"/>
                    </div>
                    <div className="input-control">
                        <label for="ano">Ano:</label>
                        <input type="text" id="ano"/>
                    </div>
                    <div className="input-control">
                        <label for="placa">Placa:</label>
                        <input type="text" id="placa"/>
                    </div>
                    <div className="input-control">
                        <label for="chassi">Nº do Chassi:</label>
                        <input type="text" id="chassi"/>
                    </div>
                    <div className="submit">
                        <button type="submit" onClick style={{marginTop:'2rem'}}>CADASTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateVeiculo;