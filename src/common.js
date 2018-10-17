import React from 'react';
import {Row, Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';
// import Home from './pages/home';
export default class Admin extends React.Component{
    render(){
        return (
            <div>
                <Row className="simple-page">
                    <Header menuType="second"/>
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}
