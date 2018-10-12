import React from 'react';
import {Card,Button,Modal} from 'antd'
import './ui.less'
export default class Modals extends  React.Component{
    state ={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }
    handleOpen=(type)=>{
        this.setState({
            [type]:true
        })
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:'确认',
            content:'你确定你学会了React了吗?',
            onOk(){
                console.log("ok");
            },
            onCancel(){
                console.log("cancel");
            }
        })
    }
    render(){
        return (
            <div>
                <Card title = "基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页面</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title = "信息确认框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>confirm</Button>
                </Card>
                <Modal title="react" visible={this.state.showModal1} onCancel={()=>{
                    this.setState({
                        showModal1:false
                    })
                }}>
                    <p>成为前端大神</p>
                </Modal>
                <Modal title="react"
                       visible={this.state.showModal2}
                       okText="下一步"
                       cancelText="算了"
                       onCancel={()=>{
                    this.setState({
                        showModal2:false
                    })
                }}>
                    <p>今天吃毛血旺？？？？</p>
                </Modal>
                <Modal
                    style={{top:20}}
                    title="react"
                       visible={this.state.showModal3}
                       onCancel={()=>{
                           this.setState({
                               showModal3:false
                           })
                       }}>
                    <p>今天吃毛血旺？？？？</p>
                </Modal>
                <Modal
                    title="react"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4:false
                        })
                    }}>
                    <p>今天吃毛血旺？？？？</p>
                </Modal>
            </div>
        );
    }
}
