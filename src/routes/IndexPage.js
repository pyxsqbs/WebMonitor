import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import TopMenu from '../components/_TopMenu/TopMenu';

class IndexPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.IndexPage} style={{minHeight: window.screen.height}}>
                {/*公共导航栏*/}
                <TopMenu/>
                {/*子路由组件*/}
                <div className={styles.children}>
                    {this.props.children}
                </div>
                <span className={styles.span}>AI-monitor powered by 9FAI</span>
            </div>
        );
    }
}

export default connect(({loading}) => ({
    loading,
}))(IndexPage);
