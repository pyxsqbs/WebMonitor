import React from 'react';
import styles from './ResultTable.css';
import {Table, Input, Button, Icon} from 'antd';

const defaultCurrent = 1;

class ResultTable extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            filterDropdownVisible: false,
            data: [],
            filtered: false,
            sort_by: 'ts_scoreitem',
            pageNumber: 1,
        };
    }

    componentWillReceiveProps(nextProps) {
        //返回数据
        const cbData = nextProps.data.data.data;
        const {keyword, desc, sort_by} = this.props.data.text;
        this.setState({
            sort_by: sort_by,
        });
        //数据数组
        const result = cbData.data;

        const keyword_reg = new RegExp(keyword, 'gi');
        this.setState({
            data: result.map((record, index) => {
                const keyword_match = String(record.product_name).match(keyword_reg);

                if (!keyword_match) {
                    return null;
                }
                return {
                    ...record,
                    product_name: (
                        <span>
              {String(record.product_name).split(keyword_reg).map((text, i) => (
                  i > 0 ? [<span className={styles.highlight}>{keyword_match[0]}</span>, text] : text
              ))}
            </span>
                    ),
                    key: index,
                };
            }).filter(record => !!record),
        })
    }

    static handleGoToOnChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    render() {
        const sort_by = this.state.sort_by;
        const columns = [{
            title: '',
            dataIndex: 'index',
            key: 'index',
            fixed: (this.props.data.switchVal) ? '' : 'left',
        }, {
            title: 'id',
            dataIndex: 'product_no',
            key: 'product_no',
        }, {
            title: 'sku',
            dataIndex: 'sku',
            key: 'sku',
        }, {
            title: 'spu',
            dataIndex: 'spu',
            key: 'spu',
        }, {
            title: '名称',
            dataIndex: 'product_name',
            key: 'product_name ',
        }, {
            title: (sort_by === 'ts_scoreitem') ? <span className={styles.highlight}>{'评分'}</span> : '评分',
            dataIndex: 'ts_score',
            key: 'ts_score',
        }, {
            title: (sort_by === 'price') ? <span className={styles.highlight}>{'价格'}</span> : '价格',
            dataIndex: 'price',
            key: 'price',
        }, {
            title: (sort_by === 'sales_volume') ? <span className={styles.highlight}>{'销量'}</span> : '销量',
            dataIndex: 'sales_volume',
            key: 'sales_volume',
        }, {
            title: '与搜索相似度评分',
            dataIndex: '_score',
            key: '_score',
        },];

        const dataSource = this.state.data.map((x, index) => {
            return {
                key: index,
                index: <span style={{color: 'black'}}>{index + 1}</span>,
                product_no: x.product_no,
                sku: x.sku,
                spu: x.spu,
                product_name: x.product_name,
                price: x.price,
                sales_volume: x.sales_volume,
                _score: x._score,
                ts_score: x.ts_score,
            }
        });

        return (
            <div className={styles.ResultTable}>
                <Table columns={columns} dataSource={dataSource} loading={this.props.loading} scroll={{x: 'auto'}}
                       size={(!this.props.data.switchVal) ? '' : 'small'}
                       pagination={{
                           showQuickJumper: true,
                           onChange: ResultTable.handleGoToOnChange,
                           defaultCurrent: defaultCurrent,
                           showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                           pageSize: (!this.props.data.switchVal) ? 10 : 20,
                       }}
                />
            </div>
        );
    }
}

export default ResultTable;
