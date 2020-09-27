import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Header(props){
    return(
        <div className="header">
            <div>
                <Link to="/"><h5>IACIT Transporte</h5></Link>
                <section>
                    {(props.auth)?<p>Bem-vindo</p>:<Link to="/login">Entrar</Link>}
                </section>
            </div>
            <h3>{props.text}</h3>
        </div>
    );
}

export default Header;