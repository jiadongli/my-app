import  React from 'react'
import {HashRouter, Route,Link,Switch} from 'react-router-dom';
import Main from './Main';
import Topic from './topic';
import About from './About';
export default class Home extends React.Component{

    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Topic">Topic</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/Topic" component={Topic}></Route>
                        <Route path="/About" component={About}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
