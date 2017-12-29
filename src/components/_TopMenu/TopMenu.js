import React from 'react';
import styles from './TopMenu.css';
import {Menu, Icon} from 'antd';
import {hashHistory} from 'dva/router'

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'CustomServer',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
    const route = (e.key === 'CustomServer') ? '' : e.key;
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
          <Menu.Item key="CustomServer">
            <Icon type="mail"/>CustomServer
          </Menu.Item>
          <Menu.Item key="other">
            <Icon type="book"/>Other
          </Menu.Item>
        </Menu>
      </div>

    );
  }
}

export default TopMenu;
