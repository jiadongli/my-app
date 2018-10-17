import React from 'react';
import {Card,Table,Modal,Button,message,Badge} from 'antd';
import Axios from '../../axios';
import Utils from '../../utils/utils';
export default class HeightTable extends React.Component{
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
            url:'/table/highList',
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
    handleChange=(pagination,filter,sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    handleDelete=(item)=>{
        let id=item.id;
        Modal.confirm({
            title:'确认',
            content:'您确认要删除此条数据吗？',
            onOk:()=>{
                this.request();
            }
        })
    }
    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id',
                width:80
            },
            {
                title:'用户名',
                dataIndex:'userName',
                width:80
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex ==1 ? '男': '女'
                }
            }, {
                title:'状态',
                dataIndex:'state',
                width:80,
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
                width:80,
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
                width:120,
            },
            {
                title:'早起时间',
                dataIndex:'time',
                width:80,
            },
        ];
        const columns2 = [
            {
                title:'id',
                dataIndex:'id',
                width:80,
                fixed:'left'
            },
            {
                title:'用户名',
                dataIndex:'userName',
                width:80,
                fixed:'left'
            },
            {
                title:'年龄',
                dataIndex:'age',
                width:80,
                sorter:(a,b)=>{
                    return a.age-b.age;
                },
                sortOrder:this.state.sortOrder
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex ==1 ? '男': '女'
                }
            }, {
                title:'状态',
                dataIndex:'state',
                width:80,
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
                width:80,
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
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday2',
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday3',
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday4',
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday5',
                width:120,
            }, {
                title:'生日',
                dataIndex:'birthday6',
                width:120,
            }, {
                title:'生日',
                dataIndex:'birthday7',
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday8',
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday9',
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday10',
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday11',
                width:120,
            },
            {
                title:'生日',
                dataIndex:'birthday12',
                width:120,
            },
            {
                title:'早起时间',
                dataIndex:'time',
                width:80,
                fixed:'right'
            },
        ];
        const columns3 = [
            {
                title:'id',
                dataIndex:'id',
                // width:80,
            },
            {
                title:'用户名',
                dataIndex:'userName',
                // width:80,
            },
            {
                title:'年龄',
                dataIndex:'age',
                // width:80,
            },
            {
                title:'性别',
                dataIndex:'sex',
                // width:80,
                render(sex){
                    return sex ==1 ? '男': '女'
                }
            }, {
                title:'状态',
                dataIndex:'state',
                width:80,
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
                // width:80,
                render(interest){
                    let config ={
                        '1':<Badge status="success" text="游泳"/>,
                        '2':<Badge status="error" text="报错"/>,
                        '3':<Badge status="default" text="正常"/>,
                        '4':<Badge status="processing" text="进行中"/>,
                        '5':<Badge status="warning" text="警告"/>,
                    };
                    return  config[interest];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday',
                // width:120,
            },
            {
                title:'早起时间',
                dataIndex:'time',
                // width:80,
            },
            {
                title:'操作',
                render:(text,item)=>{
                    return (<div>
                        <Button size="small" onClick={(item)=>this.handleDelete(item)}>增加</Button>
                            <Button size="small" type="primary" onClick={(item)=>this.handleDelete(item)} style={{marginLeft:10}}>删除</Button>
                        </div>);
                }
            }
        ];
        const {selectedRowKeys} =this.state;
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        scroll={{y:240}}
                    >

                    </Table>
                </Card>
                <Card title="左侧固定" style={{margin:'10px 0'}}>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        scroll={{x:1920}}
                    >

                    </Table>
                </Card>
                <Card title="年龄排序" style={{margin:'10px 0'}}>
                    <Table
                        columns={columns3}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        onChange={this.handleChange}
                    >
                    </Table>
                </Card>
            </div>
        )
    }
}
