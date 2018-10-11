import React from 'react';
import {HashRouter as Router ,Route,Link,Switch} from 'react-router-dom';
import Main from "../route1/Main";
import About from "../route1/About";
import Topic from "../route1/topic";
import Home from './Home';
import NoMatch from './NoMatch';
export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <div>
                    <Home>

                        <Route  path="/main" render={()=>{
                          return  (<Main>
                              <Switch>
                                  <Route path="/main/a" component={About}></Route>
                                  <Route component={NoMatch}></Route>
                              </Switch>
                            </Main>);
                        }}></Route>
                        <Route path="/Topic" component={Topic}></Route>
                        <Route path="/About" component={About}></Route>
                    </Home>
                </div>
            </Router>
        );
    }
}
