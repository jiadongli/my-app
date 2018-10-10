import React from 'react';
import Child from './Child';
import {Button} from 'antd';
import Style from "./style.less";
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    handleAdd=()=>{
        this.setState({
            count:this.state.count +1,
        })
    }
    render(){
        return <div >
            <p>React 生命周期介绍</p>
            <a href="#" className="a">你好的</a>
            <button onClick={this.handleAdd}>点击一下</button>
            <p>{this.state.count}</p>
            <i class="iconfont">&#xe604;</i>
            <Button>button</Button>
            <Child name={this.state.count}></Child>
        </div>
    }
}
