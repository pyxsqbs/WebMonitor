import React from 'react';
import {connect} from 'dva';
import styles from './CustomServer.css';
import SelectForm from '../../components/IndexPage/CustomServer/SelectForm';
import ResultTable from '../../components/IndexPage/CustomServer/ResultTable';

class CustomServer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.dispatch({
            type: 'CustomServer/INIT',
            payload: null,
        })
    }

    render() {
        return (
            <div className={styles.CustomServer}>
                {/*筛选搜索输入*/}
                <SelectForm dispatch={this.props.dispatch} loading={this.props.loading.models.CustomServer}/>
                {/*筛选结果列表*/}
                <ResultTable data={this.props.CustomServer} loading={this.props.loading.models.CustomServer}/>
            </div>
        );
    }
}

export default connect(({loading, CustomServer}) => ({
    CustomServer,
    loading,
}))(CustomServer);
