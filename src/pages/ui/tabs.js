import React from 'react';
import {Card,Tabs,message} from 'antd'
import './ui.less';
const TabPane= Tabs.TabPane;
export default class Tab extends  React.Component{
    handleShowKey=(key)=>{
        message.info(key);
    }
    render(){
        return (
            <div>
                <Card title="全局提示" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={(key)=>this.handleShowKey(key)}>
                        <TabPane tab="Tab1" key="1">content of tab 1</TabPane>
                        <TabPane tab="Tab2" key="2">content of tab 2</TabPane>
                        <TabPane tab="Tab3" key="3">content of tab 3</TabPane>
                    </Tabs>
                </Card>
            </div>
        );
    }
}
