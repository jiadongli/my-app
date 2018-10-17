import React from 'react';
import moment from 'moment';
import {Card,Form,Button,Input,Checkbox,Radio,InputNumber,Select,Switch,DatePicker,Upload,Icon,message} from 'antd';

const  FormItem=Form.Item;
const RadioGroup=Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class FormRegister extends React.Component{
    state={
        imageUrl :'',
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }
    handleSubmit = () =>{
        const userInfo=this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout={
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }

        };
        const offsetLayout ={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
      const  RowsObject = {minRows:4,maxRows:6};
        return(<div>
            <Card title="注册表单">
                <Form layout="horizontal">
                    <FormItem label="用户" {...formItemLayout}>
                        {
                            getFieldDecorator("user",{
                                initialValue:'ding',
                                rules:[
                                    {
                                        required:true,
                                        message:'用户名不能为空'
                                    }
                                ]
                            })(<Input type="text"/>)
                        }
                    </FormItem>
                    <FormItem label="密码" {...formItemLayout}>
                        {
                            getFieldDecorator("userPwd",{
                                initialValue:'123456',
                                rules:[
                                    {
                                        required:true,
                                        message:'密码不能为空'
                                    }
                                ]
                            })(<Input type="password"/>)
                        }
                    </FormItem>
                    <FormItem label="性别" {...formItemLayout}>
                        {
                            getFieldDecorator("six",{
                                initialValue:'1',
                            })(<RadioGroup >
                                <Radio value="1">男</Radio>
                                <Radio value="2">女</Radio>
                            </RadioGroup>)
                        }
                    </FormItem>
                    <FormItem label="年龄" {...formItemLayout}>
                        {
                            getFieldDecorator("age",{
                                initialValue: 18,
                            })(<InputNumber></InputNumber>)
                        }
                    </FormItem>
                    <FormItem label="当前状态" {...formItemLayout}>
                        {
                            getFieldDecorator("state",{
                                initialValue:'2',
                            })(<Select mode="multiple">
                                <Option value="1">咸鱼一条</Option>
                                <Option value="2">风华浪子</Option>
                                <Option value="3">北大才子</Option>
                                <Option value="4">百度</Option>
                                <Option value="5">咸鱼一条</Option>
                            </Select>)
                        }
                    </FormItem>
                    <FormItem label="爱好" {...formItemLayout}>
                        {
                            getFieldDecorator("interest",{
                                initialValue:'2',
                            })(<Select mode="multiple">
                                <Option value="1">打篮球</Option>
                                <Option value="2">踢足球</Option>
                                <Option value="3">乒乓球</Option>
                                <Option value="4">爬山</Option>
                                <Option value="5">跑步</Option>
                            </Select>)
                        }
                    </FormItem>
                    <FormItem label="是否已婚" {...formItemLayout}>
                        {
                            getFieldDecorator("isMarried",{
                                valuePropName:'checked',
                                initialValue:true,
                            })(<Switch/>)
                        }
                    </FormItem>
                    <FormItem label="生日" {...formItemLayout}>
                        {
                            getFieldDecorator("birthday",{
                                initialValue: moment('2018-08-08'),
                            })(<DatePicker/>)
                        }
                    </FormItem>
                    <FormItem label="联系地址" {...formItemLayout}>
                        {
                            getFieldDecorator("address",{
                                initialValue:'上海市普陀区金沙江路',
                            })(<TextArea autosize={RowsObject}/>)
                        }
                    </FormItem>
                    <FormItem label="早起时间" {...formItemLayout}>
                        {
                            getFieldDecorator("time",{
                                // initialValue:moment(),
                            })(<DatePicker />)
                        }
                    </FormItem>
                    <FormItem label="头像" {...formItemLayout}>
                        {
                            getFieldDecorator("userImg",{
                            })(  <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                fileList={false}
                                onChange={this.handleChange}
                            >{
                                this.state.imageUrl  ? <img src={this.state.imageUrl } alt=""/> : ''
                            }</Upload>)
                        }
                    </FormItem>
                    <FormItem  {...offsetLayout} >
                        {
                            getFieldDecorator("userImg",{
                            })(<Checkbox>我已阅读过<a href="#">协议</a></Checkbox>)
                        }
                    </FormItem>
                    <FormItem  {...offsetLayout} >
                       <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>);
    }
}
export default Form.create()(FormRegister)
