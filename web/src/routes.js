import React from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import isAuth from './utils/isAuth';
import getRole from './utils/getRole';

import HomePage from './pages/home/index';
import LoginPage from './pages/login/index';
import AdmPage from './pages/adm/home/index';
import CreateMotorista from './pages/adm/motorista/create/index';
import CreateVeiculo from './pages/adm/veiculo/create/index';
import Edit from './pages/adm/edit/index';

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
            <Redirect to ={{pathname:getRole(),state:{from: props.location}}}/>
        ):(
            <Component {...props}/>
        )
    )}/>
)

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path="/" component={()=>(<HomePage/>)}/>
                <PublicRoute exact path="/login" component={()=>(<LoginPage/>)}/>
                <PrivateRoute exact path="/administrador" component={()=>(<AdmPage/>)}/>
                <PrivateRoute exact path="/administrador/motorista" component={()=>(<CreateMotorista/>)}/>
                <PrivateRoute exact path="/administrador/edit/:id" component={()=>(<Edit/>)}/>
                <PrivateRoute exact path="/administrador/veiculo" component={()=>(<CreateVeiculo/>)}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;