import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/nomatch';
export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    } >
                    </Route>
                    <Route path="order/detail"></Route>
                </App>
            </HashRouter>
        );
    }
}
