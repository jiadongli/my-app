import React from 'react';
import {Card,Tabs,message,Icon} from 'antd'
import './ui.less';
const TabPane= Tabs.TabPane;

export default class Tab extends  React.Component{
    newTabIndex = 0;
    state={
        activeKey:'1'
    }
    componentWillMount(){
        const panes = [
            {
                title:'Tab 1',
                content:'欢迎晋级到最高级',
                key:'1'
            },
            {
                title:'Tab 2',
                content:'欢迎晋级到最高级2',
                key:'2'
            },
            {
                title:'Tab 3',
                content:'欢迎晋级到最高级3',
                key:'3'
            }
        ];
        this.setState({
            activeKey:panes[0].key,
            panes
        })
    }
    handleShowKey=(key)=>{
        message.info(key);
    }
    handleOnChange=(activeKey)=>{
        console.log(activeKey);
        this.setState({
            activeKey
        })
    }
    onEdit=(targetKey,action) =>{
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: `Content of${activeKey}`, key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey; // 2
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {  // 2
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render(){
        return (
            <div>
                <Card title="全局提示" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={(key)=>this.handleShowKey(key)}>
                        <TabPane tab="Tab1" key="1">content of tab 1</TabPane>
                        <TabPane tab="Tab2" key="2" disabled>content of tab 2</TabPane>
                        <TabPane tab="Tab3" key="3">content of tab 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={(key)=>this.handleShowKey(key)}>
                        <TabPane tab={<span><Icon type="plus"></Icon>Tab 1</span>} key="1">content of tab 1</TabPane>
                        <TabPane tab={<span><Icon type="plus"></Icon>Tab 2</span>} key="2">content of tab 2</TabPane>
                        <TabPane tab={<span><Icon type="plus"></Icon>Tab 3</span>} key="3">content of tab 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs
                        onChange={(activeKey)=>this.handleOnChange(activeKey)}
                        defaultActiveKey="1"
                        type="editable-card"
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel)=>{
                                return (<TabPane tab={panel.title} key={panel.key}>{panel.content}</TabPane>)
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}
