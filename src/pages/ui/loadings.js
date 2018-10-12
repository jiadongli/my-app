import React from 'react';
import {Card,Button,Icon,Spin,Alert} from 'antd'
import './ui.less'
export default class Loadings extends  React.Component{
    render(){
        const icon= <Icon  type="loading" style={{fontSize:'24px'}}/>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"></Spin>
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin size="large"></Spin>
                    <Spin indicator={icon} style={{marginLeft:'10px'}}></Spin>
                </Card>
                <Card title="内容笼罩" className="card-warp">
                    <Alert
                        message="React"
                        description="欢迎来到上海人民广场吃炸鸡！！！"
                        type="info"
                    ></Alert>
                    <Alert
                        message="React"
                        description="欢迎来到上海人民广场吃炸鸡！！！"
                        type="warning"
                    ></Alert>
                    <Spin>
                        <Alert
                            message="React"
                                 description="欢迎来到上海人民广场吃炸鸡！！！"
                                 type="info">

                        </Alert>
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到上海人民广场吃炸鸡！！！"
                            type="error">

                        </Alert>
                    </Spin>
                    <Spin indicator={icon} tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到上海人民广场吃炸鸡！！！"
                            type="error">

                        </Alert>
                    </Spin>
                </Card>
            </div>
        );
    }
}
