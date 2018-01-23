import React from 'react';
import styles from './SelectForm.css';
import {Form, Radio, Button, Input, Switch} from 'antd';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.dispatch({
                    type: 'CommoditySearch/getValue',
                    payload: values,
                })
            }
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
        this.props.dispatch({
            type: 'CommoditySearch/changeSwitchVal',
            payload: false,
        })
    };

    handleSwitchChange(checked) {
        // console.log(checked);
        this.props.dispatch({
            type: 'CommoditySearch/changeSwitchVal',
            payload: checked,
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 15},
            colon: false,
        };

        return (
            <div className={styles.SelectForm}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label=" "
                    >
                        <span className="ant-form-text" style={{fontSize: 20}}>商品搜索</span>
                        <Button style={{float: 'right'}} onClick={this.handleReset}>
                            清除
                        </Button>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="关键词"
                    >
                        {getFieldDecorator('keyword', {
                            rules: [{required: true, message: '请输入搜索的关键词!', whitespace: true}],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="优先"
                    >
                        {getFieldDecorator('sort_by', {
                            initialValue: 'ts_scoreitem'
                        })(
                            <RadioGroup>
                                <RadioButton value="ts_scoreitem">评分</RadioButton>
                                <RadioButton value="price">价格</RadioButton>
                                <RadioButton value="sales_volume">销量</RadioButton>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="排序"
                    >
                        {getFieldDecorator('desc', {
                            initialValue: '1'
                        })(
                            <RadioGroup>
                                <RadioButton value="1">降序</RadioButton>
                                <RadioButton value="0">升序</RadioButton>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="紧凑"
                    >
                        {getFieldDecorator('small', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(
                            <Switch onChange={this.handleSwitchChange}/>
                        )}
                    </FormItem>


                    <FormItem
                        wrapperCol={{span: 12, offset: 6}}
                    >
                        <Button type="primary" htmlType="submit" disabled={this.props.loading}>查询</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}


const WrappedSelectForm = Form.create()(SelectForm);

export default WrappedSelectForm;
