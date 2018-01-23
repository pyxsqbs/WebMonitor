import React from 'react';
import styles from './ResultTable.css';
import {Table, Input, Button, Icon} from 'antd';

function timeStamp2String (time){
    let datetime = new Date();
    datetime.setTime(time);
    let year = datetime.getFullYear();
    let month = datetime.getMonth() + 1;
    let date = datetime.getDate();
    let hour = datetime.getHours();
    let minute = datetime.getMinutes();
    let second = datetime.getSeconds();
    let mseconds = datetime.getMilliseconds();
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second+"."+mseconds;
};


class ResultTable extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            filterDropdownVisible: false,
            data: [],
            dataInit: [],
            searchText: '',
            filtered: false,
        };
    }

    onInputChange = (e) => {
        this.setState({searchText: e.target.value});
    };

    onSearch = () => {
        const {searchText} = this.state;
        const reg = new RegExp(searchText, 'gi');
        const CustomServerData = this.state.dataInit;
        this.setState({
            data: CustomServerData,
        }, () =>
            this.setState({
                filterDropdownVisible: false,
                filtered: !!searchText,
                data: this.state.data.map((record, index) => {
                    const match = String(record.date).match(reg);
                    if (!match) {
                        return null;
                    }
                    return {
                        ...record,
                        date: (
                            <span>
              {String(record.date).split(reg).map((text, i) => (
                  i > 0 ? [<span className={styles.highlight}>{match[0]}</span>, text] : text
              ))}
            </span>
                        ),
                        key: index,
                    };
                }).filter(record => !!record),
            }));
    };

    componentWillReceiveProps(nextProps) {
        const {username, robot_bubble, user_bubble, session_id} = this.props.data.text;
        const result = nextProps.data.data.data.result;
        const username_reg = new RegExp(username, 'gi');
        const robot_bubble_reg = new RegExp(robot_bubble, 'gi');
        const user_bubble_reg = new RegExp(user_bubble, 'gi');
        const session_id_reg = new RegExp(session_id, 'gi');
        this.setState({
            data: result.map((record, index) => {
                const username_match = String(record.username).match(username_reg);
                const robot_bubble_match = String(record.result.answer).match(robot_bubble_reg);
                const user_bubble_match = String(record.question).match(user_bubble_reg);
                const session_id_match = String(record.session_id).match(session_id_reg);
                if (!username_match || !robot_bubble_match || !user_bubble_match || !session_id_match) {
                    return null;
                }
                return {
                    ...record,
                    date: timeStamp2String(record.date),
                    username: (
                        <span>
              {String(record.username).split(username_reg).map((text, i) => (
                  i > 0 ? [<span className={styles.highlight}>{username_match[0]}</span>, text] : text
              ))}
            </span>
                    ),
                    robot_bubble: (
                        <span>
              {String(record.result.answer).split(robot_bubble_reg).map((text, i) => (
                  i > 0 ? [<span className={styles.highlight}>{robot_bubble_match[0]}</span>, text] : text
              ))}
            </span>
                    ),
                    user_bubble: (
                        <span>
              {String(record.question).split(user_bubble_reg).map((text, i) => (
                  i > 0 ? [<span className={styles.highlight}>{user_bubble_match[0]}</span>, text] : text
              ))}
            </span>
                    ),
                    session_id: (
                        <span>
              {String(record.session_id).split(session_id_reg).map((text, i) => (
                  i > 0 ? [<span className={styles.highlight}>{session_id_match[0]}</span>, text] : text
              ))}
            </span>
                    ),
                    key: index,
                };
            }).filter(record => !!record),
        }, () => this.setState({
            dataInit: this.state.data,
        }))
    }


    render(){
        const columns = [{
            title: '日期',
            dataIndex: 'date',
            fixed: 'left',
            key: 'date',
            filterDropdown: (
                <div className={styles.custom_filter_dropdown}>
                    <Input
                        ref={ele => this.searchInput = ele}
                        placeholder="搜索时间"
                        value={this.state.searchText}
                        onChange={this.onInputChange}
                        onPressEnter={this.onSearch}
                    />
                    <Button type="primary" onClick={this.onSearch}>确定</Button>
                </div>
            ),
            filterIcon: <Icon type="search" style={{color: this.state.filtered ? '#108ee9' : '#aaa'}}/>,
            filterDropdownVisible: this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange: (visible) => {
                this.setState({
                    filterDropdownVisible: visible,
                }, () => this.searchInput && this.searchInput.focus());
            },
        }, {
            title: '用户提问',
            dataIndex: 'user_bubble',
            key: 'user_bubble',
            fixed: 'left',
        }, {
            title: '智能回答',
            dataIndex: 'robot_bubble',
            key: 'robot_bubble',
            width: '100%',
            //}, {
            //title: 'session Id',
            //dataIndex: 'session_id',
            //key: 'session_id',
            //}, {
            //title: 'username',
            //dataIndex: 'username',
            //key: 'username',
            // filters: [{
            //     text: 'London',
            //     value: 'London',
            // }, {
            //     text: 'New York',
            //     value: 'New York',
            // }],
            // onFilter: (value, record) => record.address.indexOf(value) === 0,
        }];

        const dataSource = this.state.data.map((x, index) => {
            return {
                key: index,
                username: x.username,
                session_id: x.session_id,
                date: x.date,
                robot_bubble: x.robot_bubble,
                user_bubble: x.user_bubble,
            }
        });

        return (
            <div className={styles.ResultTable}>
                <Table columns={columns} dataSource={dataSource} loading={this.props.loading} scroll={{ x: 'auto'}}/>
            </div>
        );
    }
}

export default ResultTable;
