import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from "../../../components/header/index";
import api from '../../../services/backend'
import logoWork from "../../../assets/logo-work.png";
import imagemPerfil from '../../../assets/imagem-perfil.png';
import iconeLupa from '../../../assets/icone-lupa.png';
import 'index.css';
import { Link } from 'react-router-dom';

function HomeFinanceiro(){
    
    const [pesquisa_nome,setPesquisaNome]=useState();


    var nome,email,cargo,endereco,telefone
    var currentColab = {}

    var updateColab = {}
    var getColab=[]
    var user_cargo, user_matricula, user_cpf


    useEffect(()=>{
            initialSearch()
            listaUrgentes()                    
    },[])
    async function initialSearch(){
        const id = localStorage.getItem("id");
        const res = await api.get("/user/"+id,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        })
        user_matricula = localStorage.getItem("id")
        user_cpf = res.data.cpf
        // eslint-disable-next-line default-case
        switch (res.data.roles[0].name) {
            case "ROLE_ADM":
                user_cargo = "Administrador"
                break;
            case "ROLE_FINANCEIRO":
                user_cargo = "Financeiro"
                break;
            case "ROLE_GERENTE":
                user_cargo = "Gerente"
                break;
            case "ROLE_MOTORISTA":
                user_cargo = "Motorista"
                break;
            
        }
        var initInfo = document.querySelector('#div-dados-perfil')
        var initialInfo = ( <div>
                                <p className="nome-perfil">{res.data.nome}</p>
                                <p className="dados-perfil">Cargo: {user_cargo} </p>
                                <p className="dados-perfil">CPF: {user_cpf} </p>
                                <p className="dados-perfil">Matrícula: {user_matricula} </p>
                            </div>
                        )
        ReactDOM.render(initialInfo, initInfo);
        
    }

    async function listaUrgentes(){
        const res = await api.get(
            '/user?nome='+pesquisa_nome,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + localStorage.getItem("token")
                }
            }
        )
        getColab = res.data
        var colabUrgentes = document.querySelector('#lista-urgentes')

        let itemUrgentes = []
        getColab.map( c => {
            // eslint-disable-next-line default-case
            switch (c.roles[0].name) {
                case "ROLE_ADM":
                    cargo = "Administrador"
                    break;
                case "ROLE_FINANCEIRO":
                    cargo = "Financeiro"
                    break;
                case "ROLE_GERENTE":
                    cargo = "Gerente"
                    break;
                case "ROLE_MOTORISTA":
                    cargo = "Motorista"
                    break;
                
            }
            
            if(verificaProximidade(c.proximo) === "proximo"){
                itemUrgentes.push(
                    <div className="colaborador-pesquisa" onClick={ e => editarColab(c,e,"urgente")}>
                        <div className="div-perfil-pesquisa">
                            <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                        </div>
                        <p className="dados-colaborador-nome">{c.nome}</p>
                        <p className="dados-colaborador-proximo">PAGAMENTO PRÓXIMO</p>
                    </div>
            )
            } else if(verificaProximidade(c.proximo) === "atrasado"){
                itemUrgentes.push(
                    <div className="colaborador-pesquisa" onClick={ e => editarColab(c,e,"atrasado")}>
                        <div className="div-perfil-pesquisa">
                            <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                        </div>
                        <p className="dados-colaborador-nome">{c.nome}</p>
                        <p className="dados-colaborador-atrasado">PAGAMENTO ATRASADO</p>
                    </div>
            )
            }else{
                itemUrgentes.push(
                    <div className="colaborador-pesquisa" onClick={ e => editarColab(c,e,"normal")} visibility="hidden">
                        <div className="div-perfil-pesquisa">
                            <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                        </div>
                        <p className="dados-colaborador-nome">{c.nome}</p>
                        <p className="dados-colaborador-certo">PAGAMENTO EM DIA</p>
                    </div>
                    )
            }
            
            console.log(c);
        }
    )
    ReactDOM.render(itemUrgentes, colabUrgentes);
        
    }

    async function verificaProximidade(data){   

        const dataSplit = data.split('/');

        const day = dataSplit[0];
        const month = dataSplit[1];
        const year = dataSplit[2];

        const dataProximo = new Date(year, month - 1, day).getTime();

        const dataHoje = new Date().getTime();

        const dataPerto = dataProximo - 15552000000;

        if (dataHoje >= dataPerto && dataHoje < dataProximo) {
            console.log('pagamento proximo');
            return "proximo";
           
        }
        else if(dataHoje >= dataProximo){
            console.log('pagamento atrasado');
            return "atrasado";
        }else{
            return "em dia";
        }
    }

    async function searchColab(e) {
        e.preventDefault();
            const res = await api.get(
                '/user?nome='+pesquisa_nome,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':'Bearer ' + localStorage.getItem("token")
                    }
                }
            )
            getColab = res.data
        let exibirColabs = document.querySelector('#exibirColabs')
        document.getElementById("exibirColabs").style.visibility = "visible";

        let form = []
        getColab.map( c => {
                // eslint-disable-next-line default-case
                switch (c.roles[0].name) {
                    case "ROLE_ADM":
                        cargo = "Administrador"
                        break;
                    case "ROLE_FINANCEIRO":
                        cargo = "Financeiro"
                        break;
                    case "ROLE_GERENTE":
                        cargo = "Gerente"
                        break;
                    case "ROLE_MOTORISTA":
                        cargo = "Motorista"
                        break;
                    
                }
                
                if(verificaProximidade(c.proximo) === "proximo"){
                    form.push(<form onClick={ e => editarColab(c,e,"urgente")}>
                                <div className="colaborador-pesquisa">
                                    <div className="div-perfil-pesquisa">
                                        <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                                    </div>
                                    <p className="dados-colaborador-nome">{c.nome}</p>
                                    <p className="dados-colaborador-proximo">PAGAMENTO PRÓXIMO</p>
                                </div>
                            </form>
                )
                } else if(verificaProximidade(c.proximo) === "atrasado"){
                    form.push(<form onClick={ e => editarColab(c,e,"atrasado")}>
                                <div className="colaborador-pesquisa">
                                    <div className="div-perfil-pesquisa">
                                        <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                                    </div>
                                    <p className="dados-colaborador-nome">{c.nome}</p>
                                    <p className="dados-colaborador-atrasado">PAGAMENTO ATRASADO</p>
                                </div>
                            </form>
                )
                }else{
                    form.push(<form onClick={ e => editarColab(c,e,"normal")}>
                                <div className="colaborador-pesquisa">
                                    <div className="div-perfil-pesquisa">
                                        <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                                    </div>
                                    <p className="dados-colaborador-nome">{c.nome}</p>
                                    <p className="dados-colaborador-certo">PAGAMENTO EM DIA</p>
                                </div>
                            </form>
                
                
                        )
                        console.log(c);
                }
            }
        )
        ReactDOM.render(form, exibirColabs);        
    }

    async function modificarColab(e){
        e.preventDefault()
        document.getElementById("exibirColabs").style.visibility = "visible";
        updateColab ={
            cpf: document.querySelector('#cpf').value ,
            email: document.querySelector('#email').value ,
            endereco: document.querySelector('#endereco').value ,
            escala: currentColab.escala,
            login: currentColab.login,
            matricula: document.querySelector('#matricula').value ,
            nome: document.querySelector('#nome').value,
            // salario: document.querySelector('#salario').value,
            // proximo: document.querySelector('#proximo').value,
            // ultimo: document.querySelector('#ultimo').value,
            roles:[{
                id: currentColab.roles[0].id,
                name: currentColab.roles[0].name,
            }],
            // pagamento:[{
            //     salario: document.querySelector('#salario').value,
            //     proximo: document.querySelector('#proximo').value,
            //     ultimo: document.querySelector('#ultimo').value,
            // }],
            senha: currentColab.senha,
            telefone: document.querySelector('#telefone').value
        }
        updateColab.id_veiculo = document.querySelector('#id_veiculo').value  //qd fizer o bagulho de viagem


        let arrayColab = Object.entries(updateColab)
        console.log(arrayColab);
        let url = ""
        arrayColab.forEach(par => {
            if (par[1]!="" || par[1]!=undefined) { //pode dar erro, se der, tira o par[1]!= undefined
                url+=par[0]+'='+par[1]+'&'
            }

        });
        console.log(url);
        const res = await api.put(
            '/user/'+currentColab.matricula,
            updateColab,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + localStorage.getItem("token")
                }
            }
        )
    }

    function editarColab(colab,e,u){
        e.preventDefault()
        if(u === "urgente"){
            document.getElementById("fraseFormFinanceiro").value = "PAGAMENTO ATRASADO"; //
            document.getElementById("fraseFormFinanceiro").className = "dados-colaborador-atrasado";
            document.getElementById("botao-troca-status").style.visibility = "visible";
        }else if(u === "atrasado"){
            document.getElementById("fraseFormFinanceiro").value = "PAGAMENTO PRÓXIMO";
            document.getElementById("fraseFormFinanceiro").className = "dados-colaborador-proximo";
            document.getElementById("botao-troca-status").style.visibility = "visible";
        }else{
            document.getElementById("fraseFormFinanceiro").value = "PAGAMENTO EM DIA";
            document.getElementById("fraseFormFinanceiro").className = "dados-colaborador-certo";
            document.getElementById("botao-troca-status").style.visibility = "hidden"; 
        }
        currentColab = colab
        document.getElementById("form-financeiro").style.visibility = "visible";
        document.querySelector('#nome').value = colab.nome
        document.querySelector('#form-financeiro').style.visibility = "visible";
        document.querySelector('#salario').value = colab.pagamento.salario
        document.querySelector('#email').value = colab.email
        document.querySelector('#cargo').value = cargo
        document.querySelector('#proximo').value = colab.pagamento.proximo
        document.querySelector('#endereco').value = colab.endereco
        document.querySelector('#ultimo').value = colab.pagamento.ultimo
        document.querySelector('#telefone').value = colab.telefone

    }

    function fechaForm(e){
        e.preventDefault()
        document.getElementById("form-financeiro").style.visibility = "hidden";
    }

    function trocaStatus(e){
        e.preventDefault()
        document.getElementById("botao-troca-status").style.visibility = "hidden";
        document.getElementById("ultimo").value = document.getElementById("proximo").value
        document.getElementById("proximo").value = ""
        document.getElementById("proximo").style.disabled = false;
        document.getElementById("proximo").style.required = true;
    }

    return (
        <section>
            <Header auth={true}/>
            <div className="triangulo-azul"></div>
            <img src={logoWork} alt="Logo iacit" className="logo-iacit-work"/>
            <section className="section-dados-perfil">
                <img src={imagemPerfil} alt="Imagem de perfil do usuário" className="imagem-perfil"/>
                <div className="div-dados-perfil" id="div-dados-perfil">

                </div>
            </section>
            <section className="colaboradores-financeiro">
                <p className="frase-adm">Situação Colaboradores</p>
                <hr className="linha"/>
                <div id="lista-urgentes">
                    <div className="colaborador-pesquisa">
                        <div className="div-perfil-pesquisa">
                            <img src={imagemPerfil} alt="Imagem de perfil do colaborador." className="icone-pesquisa"/>
                        </div>
                        <p className="dados-colaborador-nome">Joãozin</p>
                        <p className="dados-colaborador-atrasado">PAGAMENTO ATRASADO</p>
                    </div>
                </div>
            </section>
            <Link to="/registerJornada">
                <button className="botao-cadastro-jornada">Cadastrar Jornada</button>
            </Link>
            <p className="frase-adm">Procurar Colaboradores:</p>
            <form className="pesquisa-administrativo" onSubmit={searchColab}>
                <input type="text" name="procura" id="procura-adm" className="procura-adm" value={pesquisa_nome}
onChange={e => setPesquisaNome(e.target.value)}/>
                <div className="div-botao-procurar">
                    <button className="botao-procurar" type="submit">Procurar</button>
                    <img src={iconeLupa} alt="imagem de lupa." className="imagem-lupa"/>
                </div>
            </form>
            <section>
                <div className="lista-resultados" id="exibirColabs"> {/* visibility="hidden"*/}
                </div>
            </section>
            <section className="form-edita-financeiro" id ="form-edita-financeiro" visibility="hidden">
                <form onSubmit={modificarColab} id="form-financeiro" className="form-financeiro" visibility="hidden">
                    <img src={imagemPerfil} alt="Placeholder da imagem de perfil."/>
                    <p id="fraseFormFinanceiro"></p>
                    <div className="text-esquerda">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" disabled value={nome}/>
                        <label htmlFor="email" >E-mail:</label>
                        <input type="text" id="email" disabled value={email}/>
                        <label htmlFor="cargo">Cargo:</label>
                        <input type="text" id="cargo" disabled value={cargo}/>
                        <label htmlFor="ultimo">Último pagamento:</label>
                        <input type="date" id="ultimo" disabled/>
                    </div>
                    <div className="text-direita">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" id="telefone" disabled value={telefone}/>
                        <label htmlFor="salario">Salário:</label>
                        <input type="text" id="salario"/>
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" id="endereco" disabled value={endereco}/>
                        <label htmlFor="proximo">Próximo pagamento: </label>
                        <input type="date" id="proximo" disabled/>
                    </div>
                    <div className="btn-container">
                        <button type="submit">Editar</button>
                        <button onClick={fechaForm()}>Fechar</button>
                        <button onClick={trocaStatus()}>Já está Pago</button>
                    </div>                   
                </form>  
            </section>
        </section>
    );
}
 
export default HomeFinanceiro;