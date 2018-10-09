import React from 'react';
export default class Child extends React.Component{
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
    componentWillMount(){
        console.log('willMount');
    }
    componentDidMount(){
        console.log('did Mount');
    }
    componentWillReceiveProps(newProps){
        console.log('will props'+newProps.name);
    }
    shouldComponentUpdate(){
        console.log('should update');
        return true;
    }
    componentWillUpdate(){
        console.log('will update');
    }
    componentDidUpdate(){
        console.log('did update');
    }
    render(){
        return <div>
            <p>这里是子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}
