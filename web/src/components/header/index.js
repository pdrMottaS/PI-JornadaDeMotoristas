import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './index.css';

function Header(props){

    const hist = useHistory();

    function handleLogout(){
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("id");
        hist.push("/");
    }

    return(
        <div className="header">
            <div>
                <Link to="/"><h5>IACIT Transporte</h5></Link>
                <section>
                    {(props.auth)?<p>Bem-vindo | <span onClick={handleLogout}>Sair</span></p>:<Link to="/login">Entrar</Link>}
                </section>
            </div>
            <h3>{props.text}</h3>
        </div>
    );
}

export default Header;