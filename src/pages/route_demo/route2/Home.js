import  React from 'react'
import {Link} from 'react-router-dom';
export default class Home extends React.Component{

    render(){
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/main">Home</Link>
                        </li>
                        <li>
                            <Link to="/Topic">Topic</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Abouta">404Not</Link>
                        </li>
                    </ul>
                    {this.props.children}
                </div>
        );
    }
}
