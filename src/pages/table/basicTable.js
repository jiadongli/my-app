import React from 'react';
import {Card,Table,Modal,Button,message} from 'antd';
import Axios from '../../axios';
import Utils from '../../utils/utils';
export default class BasicTable extends React.Component{
    state ={
        dataSource:[],
        dataSource2:[],
    };
    params = {
        page:1
    }
    componentDidMount(){
        const dataSource=[
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'上海市普陀区金沙江路',
                time:'09:00'
            },
            {
                id:'1',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'上海市普陀区金沙江路',
                time:'09:00'
            },
            {
                id:'2',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'上海市普陀区金沙江路',
                time:'09:00'
            }
        ];
        dataSource.map((item,index)=>{
            item.key=index
        })
        this.setState({
            dataSource
        })
        this.request();
    }
    request=()=>{
        Axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                },
                isShowLoading:true,
            }
        }).then(res=>{
            const data=res.data;
            data.result.list.map((item,index)=>{
                item.key =index;
            })
            if(data.code==0){
                this.setState({
                    dataSource2:data.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(data,(current)=>{
                        this.params.page=current;
                        this.request();
                    })
                })
            }
        })
    }
    onRowClick=(record,index)=>{
        let selectKey =[index];
        Modal.info({
            title:'用户名',
            content:record.userName,
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record,
        })
    }
    handleDelete=(()=>{
        let rows= this.state.selectedRows;
        let ids=[];
        rows.map((item)=>{
            ids.push(item.id);
        })
        Modal.confirm({
            title:'删除提示',
            content:`你删除的数据${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    })
    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id',
            },
            {
                title:'用户名',
                dataIndex:'userName',
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex ==1 ? '男': '女'
                }
            }, {
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config={
                        '1':'咸鱼1',
                        "2":'咸鱼2',
                        '3':'咸鱼3',
                        "4":'咸鱼4',
                        '5':'咸鱼5',
                    };
                    return config[state];
                }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    let config ={
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'打篮球3',
                        '4':'打篮球4',
                        '5':'打篮球5',
                        '6':'打篮球6',
                    };
                    return  config[interest];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'早起时间',
                dataIndex:'time',
            },
        ];
        const {selectedRowKeys} =this.state;
        const rowSelection ={
            type:'radio',
            selectedRowKeys
        }
        const rowCheckSelection={
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                // let ids=[];
                // selectedRows.map((item)=>{
                //     ids.push(item.id);
                // })
                this.setState({
                    selectedRowKeys,
                    selectedRows,
                })
            }
        }

        return (
            <div>
                <Card title="基础表格">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                    >

                    </Table>
                </Card>
                <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                    >

                    </Table>
                </Card>
                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table
                        rowSelection={rowSelection}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                },
                            };
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                    >

                    </Table>
                </Card>
                <Card title="Mock-复选" style={{margin:'10px 0'}}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete} >删除</Button>
                    </div>
                    <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                    >
                    </Table>
                </Card>
                <Card title="Mock-表格分页" style={{margin:'10px 0'}}>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={this.state.pagination}
                    >
                    </Table>
                </Card>
            </div>
        )
    }
}
