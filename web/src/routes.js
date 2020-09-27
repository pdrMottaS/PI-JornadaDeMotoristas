import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';

import HomeFinanceiro from './pages/views/homeFinanceiro.jsx';
import HomeAdm from './pages/views/HomeAdm';
import HomeMoto from './pages/views/homeMoto.jsx';
import HomePage from './pages/views/home.jsx';

import MenuDev from './pages/views/menudev';
import Login from './pages/views/login.jsx';

import CreateAdm from './pages/scripts/createAdministrativo';
import CreateVeiculo from './pages/scripts/createVeiculo';
import CreateFinanceiro from './pages/scripts/createFinanceiro';
import CreateMotorista from './pages/scripts/createMotorista';

import isAuth from './utils/isAuth';

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
            <Redirect to ={{pathname:'/',state:{from: props.location}}}/>
        ):(
            <Component {...props}/>
        )
    )}/>
)

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=>(<HomePage/>)}/>
            <Route exact path="/menudev" component={()=>(<MenuDev/>)}/>
            <Route exact path="/registerMotorista" component={()=>(<CreateMotorista/>)}/>
            <Route exact path="/registerAdm" component={()=>(<CreateAdm/>)}/>
            <Route exact path="/registerFinanceiro" component={()=>(<CreateFinanceiro/>)}/>
            <Route exact path="/registerVeiculo" component={()=>(<CreateVeiculo/>)}/>
            <Route exact path="/adm" component={()=>(<HomeAdm/>)}/>
            <Route exact path="/motorista" component={()=>(<HomeMoto/>)}/>
            <Route exact path="/financeiro" component={()=>(<HomeFinanceiro/>)}/>
            <Route exact path="/login" component={()=>(<Login/>)}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;