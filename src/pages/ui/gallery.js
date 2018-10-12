import React from 'react';
import {Card,Row,Col,Modal} from 'antd'
import './ui.less';
const { Meta } = Card;
export default class Gallery extends  React.Component{
    state={
        visible:false
    }
    handleShowImg=(currentImg)=>{
        console.log(currentImg);
        this.setState({
            visible:true,
            currentImg,
        })
    }
    render(){
        const imgs=[
            ['1.png','2.png','3.png','4.png','5.png','6.png'],
            ['7.png','8.png','9.png','10.png','11.png','12.png'],
            ['13.png','14.png','15.png','16.png','17.png','18.png'],
            ['19.png','20.png','21.png','22.png','23.png','24.png','25.png'],
        ];
        const imgList = imgs.map((list)=>list.map((item)=>
            <Card
                style={{marginBottom:8}}
                hoverable
                  cover={<img alt="example" src={'/gallery/'+item}
                   onClick={()=>this.handleShowImg('/gallery/'+item)}
                  />}
            >
                <Meta
                    title="图片画廊"
                    description="No pains No gains!!!"
                />

            </Card>
        ))
        return (
            <div>
                <Row gutter={6}>
                    <Col md={6}>
                        {imgList[0]}
                    </Col>
                    <Col md={6}>
                        {imgList[1]}
                    </Col>
                    <Col md={6}>
                        {imgList[2]}
                    </Col>
                    <Col md={6}>
                        {imgList[3]}
                    </Col>
                    {/*<Col md={4}>*/}
                        {/*{imgList[4]}*/}
                    {/*</Col>*/}
                </Row>
                <Modal
                    title="图片画廊"
                    visible={this.state.visible}
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                >
                    <img src={this.state.currentImg} alt="" style={{width:'100%'}}/>
                </Modal>
            </div>
        );
    }
}
