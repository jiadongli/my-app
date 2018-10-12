import React from 'react';
import { Menu, Icon,Switch ,Button} from 'antd';
import {NavLink} from 'react-router-dom';
import MenuConfig from './../../config/menuConfig';
import  './index.less';
const SubMenu =Menu.SubMenu;
export default class NavLeft extends React.Component{
    state={
        theme:'dark',
        // collapsed: false
    }
    componentWillMount(){
        const menuTreeNode= this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
             return (
                 <SubMenu title={item.title} key={item.key}>
                     {this.renderMenu(item.children)}
                 </SubMenu>
             )
            }
            return <Menu.Item title={item.title} key={item.key} >
                    <NavLink to={item.key}>
                        {item.title}
                    </NavLink>
                </Menu.Item>
        })
    }
    changeTheme= (value) =>{
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }
    // toggleCollapsed = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }
    render(){
        return (
            <div className="left-wrap" style={{background: this.state.theme === 'light' ? '#fff' : '#002140'}}>
                <div className="logo" style={{background: this.state.theme === 'light' ? '#fff' : '#002140'}}>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1  style={{color: this.state.theme === 'light' ? '#002140' : '#fff'}}>Imooc MS</h1>
                </div>
                <div className={this.state.theme === 'light' ? "nev-left-menu nev-left-menu-lift" : "nev-left-menu"}>
                    {/*<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>*/}
                        {/*<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />*/}
                    {/*</Button>*/}
                <Menu
                    defaultSelectedKeys={['1']}
                       defaultOpenKeys={['sub1']}
                       mode="inline"
                       theme={this.state.theme}
                    // inlineCollapsed={this.state.collapsed}
                >
                    {this.state.menuTreeNode}
                </Menu>
                    <div style={{textAlign:'center',marginTop:'10px'}}><Icon type="bulb" theme="outlined" />Change Theme <Switch  checked={this.state.theme === 'dark'}  checkedChildren="Dark" unCheckedChildren="Light" onChange={this.changeTheme} /></div>
                </div>
            </div>
        );
    }
}
