import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/login/index';
import Dashboard from './pages/dashboard/home/index';
import ColaboradorPage from './pages/dashboard/colaborador/index';
import CreateColaboraddor from './pages/dashboard/colaborador/create/index';
import EditColaborador from './pages/dashboard/colaborador/edit/index';
import VeiculoPage from './pages/dashboard/veiculo/index';
import CreateVeiculo from './pages/dashboard/veiculo/create/index';
import EditVeiculo from './pages/dashboard/veiculo/edit/index';
import JornadaPage from './pages/dashboard/jornada/index';
import isAuth from './utils/isAuth';
import AlertaPage from './pages/dashboard/alertas/index';
import JornadaMotoristaPage from './pages/dashboard/jornadasfuturas/index';
import ExtratoMensal from './pages/dashboard/relatorios/extratoMensal/index';
import ExtratoDiario from './pages/dashboard/relatorios/extratoDiario/index';
import Descumprimento from './pages/dashboard/relatorios/descumprimento/index'
import CreateJornada from './pages/dashboard/jornada/create/index'
import EditJornada from './pages/dashboard/jornada/edit/index';
import PagamentoPage from './pages/dashboard/pagamento';
import CreatePagamento from './pages/dashboard/pagamento/create';
import EditPagamento from './pages/dashboard/pagamento/edit/index';



function Routes(){

    const PrivateRoute = ({component: Component, ...rest})=>(
        <Route {...rest} render ={props =>(
            isAuth()?(
                <Component {...props}/>
            ):(
                <Redirect to ={{pathname:'/',state:{from: props.location}}}/>
            )
        )}/>
    )
    
    const PublicRoute = ({component: Component, ...rest})=>(
        <Route {...rest} render ={props =>(
            isAuth()?(
                <Redirect to ={{pathname:"/dashboard",state:{from: props.location}}}/>
            ):(
                <Component {...props}/>
            )
        )}/>
    )

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={()=>(<LoginPage/>)}/>
                <Route exact path="/dashboard" component={()=>(<Dashboard/>)}/>
                <Route exact path="/dashboard/colaborador" component={()=>(<ColaboradorPage/>)}/>
                <Route exact path="/dashboard/colaborador/create" component={()=>(<CreateColaboraddor/>)}/>
                <Route exact path="/dashboard/colaborador/:id" component={()=>(<EditColaborador/>)}/>
                <Route exact path="/dashboard/veiculo" component={()=>(<VeiculoPage/>)}/>
                <Route exact path="/dashboard/veiculo/create" component={()=>(<CreateVeiculo/>)}/>
                <Route exact path="/dashboard/veiculo/:id" component={()=>(<EditVeiculo/>)}/>
                <Route exact path="/dashboard/jornada" component={()=>(<JornadaPage/>)}/>
                <Route exact path="/dashboard/jornada/create" component={()=>(<CreateJornada/>)}/>
                <Route exact path="/dashboard/alerta" component={()=>(<AlertaPage/>)}/>
                <Route exact path="/dashboard/jornada/:id" component={()=>(<EditJornada/>)}/>
                <Route exact path="/dashboard/jornadas_futuras" component={()=>(<JornadaMotoristaPage/>)}/>
                <Route exact path="/dashboard/relatorios/extratoDiario" component={()=>(<ExtratoDiario/>)}/>
                <Route exact path="/dashboard/relatorios/extratoMensal" component={()=>(<ExtratoMensal/>)}/>
                <Route exact path="/dashboard/relatorios/jornadasDescumpridas" component={()=>(<Descumprimento/>)}/>
                <Route exact path="/dashboard/pagamento" component={()=>(<PagamentoPage/>)}/>
                <Route exact path="/dashboard/pagamento/create" component={()=>(<CreatePagamento/>)}/>
                <Route exact path="/dashboard/pagamento/:id" component={()=>(<EditPagamento/>)}/>
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;