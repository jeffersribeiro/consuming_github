import React from 'react';
import ReactDOM from 'react-dom';
import Resp from './main';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/main" exact={true} component={Resp} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
