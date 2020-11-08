import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from "../../../../components/header/index";
import {useHistory} from 'react-router-dom';
import api from '../../../../services/api'
import './index.css';

function CreateJornada(){

    const hist = useHistory();

    //formulario deve ser um componente para ser usado na página home
    const [dataInicio,setDataInicio]=useState();
    const [dataFinal,setDataFinal]=useState();
    const [carga,setCarga]=useState();
    const [endereco,setEndereco]=useState();
    const [matricula,setMatricula]=useState();
    const [chassi,setChassi]=useState();
    const [motoristas,setMotoristas]=useState([]);
    const [veiculos,setVeiculos]=useState([]);

    function leftPad(value, totalWidth, paddingChar) {
        var length = totalWidth - value.toString().length + 1;
        return Array(length).join(paddingChar || '0') + value;
    };
    
    useEffect(async ()=>{
        getMotoristas();
        getVeiculos();
    },[])

    async function getVeiculos(){
        var res = await api.get("/veiculo/index",
        {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        });
        var v = [];
        for(let i in res.data){
            v.push({chassi:res.data[i].chassi,modelo:res.data[i].modelo,placa:res.data[i].placa})
        }
        setChassi(v[0].chassi);
        setVeiculos(v);
    }

    async function getMotoristas(){
        var res = await api.get("/user/index",
        {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        });
        var mtr = [];
        for(let i in res.data){
            var cargo = res.data[i].roles[0].name;
            if(cargo == "ROLE_MOTORISTA"){
                mtr.push({nome:res.data[i].nome,matricula:res.data[i].matricula,cpf:res.data[i].cpf});
            }
        }
        setMatricula(mtr[0].matricula);
        setMotoristas(mtr);
    }

    async function cadastrarJornada(e){
        e.preventDefault();
        let dataInicioPost = dataInicio.replace("T", "@");
        let dataFinalPost = dataFinal.replace("T", "@");
        
        var jornada = {
            data_inicio:dataInicioPost,
            data_final:dataFinalPost,
            carga:carga,
            destino:endereco,
            motorista:[
                {
                    matricula:matricula
                }
            ],
            veiculo:[
                {
                    chassi:chassi
                }
            ]
        }
        console.log(jornada);
        const res = await api.post(
            '/jornada',
            jornada,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + localStorage.getItem("token")
                }
            }
        )
        addStatus(res.data.id);
        alert("Jornada iniciada");
        hist.push("/administrador");
    }

    async function addStatus(id){
        var now = new Date();
        var current = (now.getFullYear()+"-"+leftPad((now.getMonth()+1),2)+"-"+leftPad(now.getDate(),2)+"@"+leftPad(now.getHours(),2)+":"+leftPad(now.getMinutes(),2));

        const res = await api.post(
            "/jornada/"+id+"/status",
            {
                status:{
                    id:1
                },
                data:current
            },
            {
                headers:{
                    'Authorization':'Bearer ' + localStorage.getItem("token")
                }
            }
        )
    }
    

    return(
        <div>
            <Header text="Cadastro de Jornada" auth={true}/>
            <h4 id="msg-cadastro">Insira os dados cadastrais da Jornada:</h4>
            <form onSubmit={cadastrarJornada}>
                <div className="content">
                    <div className="input-control">
                        <label htmlFor="data-inicio">Data e Hora de inicio:</label>
                        <input type="datetime-local" id="data-inicio" value={dataInicio} required onChange={e => setDataInicio(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="data-inicio">Data e Hora de entrega estimada:</label>
                        <input type="datetime-local" id="data-final" value={dataFinal} required onChange={e => setDataFinal(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="endereco">Endereço da entrega:</label>
                        <input type="text" id="endereco" value={endereco} required onChange={e => setEndereco(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="endereco">Conteúdo da carga:</label>
                        <input type="textarea" id="endereco" value={carga} required onChange={e => setCarga(e.target.value)}/>
                    </div>
                    <div className="input-control">
                        <label htmlFor="cpf">Matricula do motorista:</label>
                        <select id="mototrista" className="input-select" onChange={e => setMatricula(e.target.value)}>
                            {motoristas.map(motorista=>(
                                <option value={motorista.matricula}>{motorista.cpf}, {motorista.nome}</option>
                            ))}    
                        </select>
                    </div>
                    <div className="input-control">
                        <label htmlFor="veiculo">Veículo da viagem:</label>
                        <select id="veiculo" className="input-select" onChange={e => setChassi(e.target.value)}>
                            {veiculos.map(veiculo=>(
                                <option value={veiculo.chassi}>{veiculo.modelo}, {veiculo.placa}</option>
                            ))}    
                        </select>
                    </div>
                    <div className="submit">
                        <button type="submit" >CADASTRAR JORNADA</button>
                    </div>

        
                </div>
            </form> 
        </div>
    );
}


export default CreateJornada;