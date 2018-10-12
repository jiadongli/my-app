import React from 'react';
import {Card,Button,message} from 'antd'
import './ui.less'
export default class Message extends  React.Component{
    handleShowMessage=(type)=>{
        message[type]("恭喜你,成功了！");
    }
    render(){
        return (
            <div>
                <Card title="全局提示" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleShowMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleShowMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleShowMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleShowMessage('loading')}>Loading</Button>
                    <Button type="primary" onClick={()=>this.handleShowMessage('error')}>Error</Button>
                </Card>
            </div>
        );
    }
}
