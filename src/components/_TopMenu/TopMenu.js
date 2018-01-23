import React from 'react';
import styles from './TopMenu.css';
import {Menu, Icon} from 'antd';
import {hashHistory} from 'dva/router';
import {setCookie, getCookie} from '../../utils/cookie';

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: getCookie('indexRoute') || 'CommoditySearch',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            current: e.key,
        });
        const route = (e.key === 'CommoditySearch') ? '' : e.key;
        setCookie('indexRoute', route);
        hashHistory.push(`/${route}`)
    }

    render() {
        return (
            <div className={styles.MenuContainer}>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="CommoditySearch">
                        <Icon type="mail"/>CommoditySearch
                    </Menu.Item>
                    <Menu.Item key="CustomServer">
                        <Icon type="book"/>CustomServer
                    </Menu.Item>
                </Menu>
            </div>

        );
    }
}

export default TopMenu;
