import React from 'react';
import {Card, Button, Table, Form, Select,DatePicker, Modal, message } from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;
export default class Order extends React.Component {
    state = {
        orderInfo:{},
        orderConfirmVisible:false,
    };
    params = {
        page:1
    }
    componentDidMount(){
        this.requestList()
    }
    requestList=()=>{
      const  _this = this;
        axios.ajax({
            url:'/order/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            const data = res.data;
            let list = data.result.list.map((item, index) => {
                item.key = index;
                return item;
            });
            this.setState({
                list,
                pagination:Utils.pagination(data,(current)=>{
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }
    // 订单结束确认
    handleConfrim=()=>{
        let item = this.state.selectedItem;
        if(!item){
            Modal.info({
                title:'信息',
                content:'请选择一条订单进行结束',
            })
            return;
        }
        axios.ajax({
            url:'/order/bike_info',
            data:{
                params:{
                    orderId:item.id,
                }
            }
        }).then((res)=>{
            const data=res.data;
            if(data.code==0){
                this.setState({
                    orderInfo:data.result,
                    orderConfirmVisible:true,
                })
            }
        })

    }
    // 结束订单
    handleFinishOrder=()=>{
        let item = this.state.selectedItem;
        axios.ajax({
            url:'/order/finish_order',
            data:{
                params:{
                    orderId:item.id,
                }
            }
        }).then((res)=>{
            const data=res.data;
            if(data.code==0){
                message.success('订单结束成功')
                this.setState({
                    orderConfirmVisible:false,
                })
            }
        })

    }
    onRowClick=(record,index)=>{
        let selectKey =[index];
        Modal.info({
            title:'当前id',
            content:record.id,
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record,
        })
    }
    openOrderDetail=()=>{
        let item = this.state.selectedItem;
        if(!item){
            Modal.info({
                title:'信息',
                content:'请选择一条订单',
            })
            return;
        }
        window.location.href=`/#/common/order/detail/${item.id}`;
    }
    render() {
        const  columns =[
            {
                title:'订单编号',
                dataIndex:'order_sn',
            },
            {
                title:'车辆编号',
                dataIndex:'bike_sn',
            },
            {
                title:'用户名',
                dataIndex:'user_name',
            },
            {
                title:'手机号',
                dataIndex:'mobile',
            },
            {
                title:'里程',
                dataIndex:'distance',
            },
            {
                title:'行驶时长',
                dataIndex:'total_time',
                render:(distance)=>{
                    return distance/1000+'Km';
                }
            },
            {
                title:'状态',
                dataIndex:'status',
            },
            {
                title:'开始时间',
                dataIndex:'start_time',
            },
            {
                title:'结束时间',
                dataIndex:'end_time',
            },
            {
                title:'订单金额',
                dataIndex:'total_fee',
            },
            {
                title:'实付金额',
                dataIndex:'user_pay',
            },
        ];
        const fromItemLayout={
            labelCol:{span:5},
            wrapperCol:{span:19},
        };
        const {selectedRowKeys} =this.state;
        const rowSelection ={
            type:'radio',
            selectedRowKeys
        }
        return (
            <div>
                <Card>
                    <FilterForm/>
                </Card>
                <Card style={{marginTop:10}}>
                    <Button onClick={this.openOrderDetail}>订单详情</Button>
                    <Button style={{marginLeft:10}} onClick={this.handleConfrim}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                },
                            };
                        }}
                    />
                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisible}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisible:false,
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form label="车辆编号" layout="horizontal">
                       <FormItem label="车辆编号" {...fromItemLayout}>
                           {this.state.orderInfo.bike_sn}
                       </FormItem>
                        <FormItem label="剩余电量" {...fromItemLayout}>
                            {this.state.orderInfo.battery+'%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...fromItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...fromItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
};
class FilterForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
                        )
                    }
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker style={{marginLeft:5}} showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);
