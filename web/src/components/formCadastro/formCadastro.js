import React from 'react';
import '../../pages/styles/page-form-cadastro.css';
import imagemPerfil from "../../assets/imagem-perfil.png";

function FormCad(props){

    return(
        <div className="input-control">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    );
}

export default FormCad;