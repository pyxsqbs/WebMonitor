import React from 'react';
import {connect} from 'dva';
import styles from './CommoditySearch.css';
import SelectForm from '../../components/IndexPage/CommoditySearch/SelectForm';
import ResultTable from '../../components/IndexPage/CommoditySearch/ResultTable';

class CommoditySearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.CommoditySearch}>
                {/*筛选搜索输入*/}
                <SelectForm dispatch={this.props.dispatch} loading={this.props.loading.models.CommoditySearch}/>
                {/*筛选结果列表*/}
                <ResultTable data={this.props.CommoditySearch} loading={this.props.loading.models.CommoditySearch}/>
            </div>
        );
    }
}

export default connect(({loading, CommoditySearch}) => ({
    CommoditySearch,
    loading,
}))(CommoditySearch);
