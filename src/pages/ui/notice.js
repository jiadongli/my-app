import React from 'react';
import {Card,Button,notification} from 'antd'
import './ui.less'
export default class Notice extends  React.Component{
    handleOpenNotification=(type,direction)=>{
        if(direction) {
            notification.config({
                placement: direction
            })
        }

        notification[type]({
            message:'发工资了！！！',
            description:'上个月考勤30,实发工资10万,请笑纳！',
        })
}
    render(){
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpenNotification('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('info')}>info</Button>
                </Card>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpenNotification('success','topLeft')}>success</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('warning','topRight')}>warning</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('error','bottomLeft')}>error</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('info','bottomRight')}>info</Button>
                </Card>
            </div>
        );
    }
}
