import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import NoMatch from './pages/nomatch';
import Notice from './pages/ui/notice'
import Message from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
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
                                <Route path="/admin/ui/modals"  component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component ={Loadings}></Route>
                                <Route path="/admin/ui/notification" component ={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Message}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousels}></Route>
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
