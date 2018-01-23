import React from 'react';
import styles from './SelectForm.css';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate, DatePicker, Input
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;

class SelectForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.dispatch({
                    type: 'CustomServer/getValue',
                    payload: values,
                })
            }
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }


    // normFile = (e) => {
    //     console.log('Upload event:', e);
    //     if (Array.isArray(e)) {
    //         return e;
    //     }
    //     return e && e.fileList;
    // }

    componentDidMount() {
        this.props.dispatch({
            type: 'CustomServer/getValue',
            payload: {},
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 15},
            colon: false,
        };

        const rangeConfig = {
            rules: [{
                type: 'array',
                // required: true,
                message: 'Please select time!'
            }],
        };

        return (
            <div className={styles.SelectForm}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label=" "
                    >
                        <span className="ant-form-text" style={{fontSize: 20}}>客服中心</span>
                        <Button style={{float: 'right'}} onClick={this.handleReset}>
                            Clear
                        </Button>
                    </FormItem>
                    {/*<FormItem*/}
                    {/*{...formItemLayout}*/}
                    {/*label="Select"*/}
                    {/*hasFeedback*/}
                    {/*>*/}
                    {/*{getFieldDecorator('select', {*/}
                    {/*rules: [*/}
                    {/*// {required: true, message: 'Please select your country!'},*/}
                    {/*],*/}
                    {/*})(*/}
                    {/*<Select placeholder="Please select a country">*/}
                    {/*<Option value="china">China</Option>*/}
                    {/*<Option value="use">U.S.A</Option>*/}
                    {/*</Select>*/}
                    {/*)}*/}
                    {/*</FormItem>*/}

                    {/*<FormItem*/}
                    {/*{...formItemLayout}*/}
                    {/*label="user bubble"*/}
                    {/*>*/}
                    {/*{getFieldDecorator('user bubble', {*/}
                    {/*rules: [*/}
                    {/*// {required: true, message: 'Please select your favourite colors!', type: 'array'},*/}
                    {/*],*/}
                    {/*})(*/}
                    {/*<Select mode="multiple" placeholder="Please select user bubble">*/}
                    {/*<Option value="red">Red</Option>*/}
                    {/*<Option value="green">Green</Option>*/}
                    {/*<Option value="blue">Blue</Option>*/}
                    {/*</Select>*/}
                    {/*)}*/}
                    {/*</FormItem>*/}

                    {/*<FormItem*/}
                    {/*{...formItemLayout}*/}
                    {/*label="robot bubble"*/}
                    {/*>*/}
                    {/*{getFieldDecorator('robot bubble', {*/}
                    {/*rules: [*/}
                    {/*// {required: true, message: 'Please select your favourite colors!', type: 'array'},*/}
                    {/*],*/}
                    {/*})(*/}
                    {/*<Select mode="multiple" placeholder="Please select robot bubble">*/}
                    {/*<Option value="red">Red</Option>*/}
                    {/*<Option value="green">Green</Option>*/}
                    {/*<Option value="blue">Blue</Option>*/}
                    {/*</Select>*/}
                    {/*)}*/}
                    {/*</FormItem>*/}

                    <FormItem
                        {...formItemLayout}
                        label="user bubble"
                    >
                        {getFieldDecorator('user_bubble', {
                            rules: [{message: 'Please input user bubble!', whitespace: true}],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="robot bubble"
                    >
                        {getFieldDecorator('robot_bubble', {
                            rules: [{message: 'Please input robot bubble!', whitespace: true}],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="skip"
                    >
                        {getFieldDecorator('skip', {initialValue: 0})(
                            <InputNumber min={0}/>
                        )}
                        <span className="ant-form-text"> 万</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="fuzzy"
                    >
                        {getFieldDecorator('fuzzy', {valuePropName: 'checked', initialValue: true})(
                            <Switch/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="time"
                    >
                        {getFieldDecorator('time', rangeConfig)(
                            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="session id"
                    >
                        {getFieldDecorator('session_id', {
                            rules: [{message: 'Please input session id!', whitespace: true}],
                        })(
                            <Input disabled={true}/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="username"
                    >
                        {getFieldDecorator('username', {
                            rules: [{message: 'Please input username!', whitespace: true}],
                        })(
                            <Input disabled={true}/>
                        )}
                    </FormItem>

                    {/*<FormItem*/}
                    {/*{...formItemLayout}*/}
                    {/*label="Slider"*/}
                    {/*>*/}
                    {/*{getFieldDecorator('slider')(*/}
                    {/*<Slider marks={{0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F'}}/>*/}
                    {/*)}*/}
                    {/*</FormItem>*/}

                    {/*<FormItem*/}
                    {/*{...formItemLayout}*/}
                    {/*label="Radio.Group"*/}
                    {/*>*/}
                    {/*{getFieldDecorator('radio-group')(*/}
                    {/*<RadioGroup>*/}
                    {/*<Radio value="a">item 1</Radio>*/}
                    {/*<Radio value="b">item 2</Radio>*/}
                    {/*<Radio value="c">item 3</Radio>*/}
                    {/*</RadioGroup>*/}
                    {/*)}*/}
                    {/*</FormItem>*/}

                    {/*<FormItem*/}
                    {/*{...formItemLayout}*/}
                    {/*label="Radio.Button"*/}
                    {/*>*/}
                    {/*{getFieldDecorator('radio-button')(*/}
                    {/*<RadioGroup>*/}
                    {/*<RadioButton value="a">item 1</RadioButton>*/}
                    {/*<RadioButton value="b">item 2</RadioButton>*/}
                    {/*<RadioButton value="c">item 3</RadioButton>*/}
                    {/*</RadioGroup>*/}
                    {/*)}*/}
                    {/*</FormItem>*/}

                    <FormItem
                        {...formItemLayout}
                        label="score"
                    >
                        {getFieldDecorator('score', {
                            initialValue: 5,
                        })(
                            <Rate/>
                        )}
                    </FormItem>

                    {/*<FormItem*/}
                    {/*{...formItemLayout}*/}
                    {/*label="Upload"*/}
                    {/*extra="longgggggggggggggggggggggggggggggggggg"*/}
                    {/*>*/}
                    {/*{getFieldDecorator('upload', {*/}
                    {/*valuePropName: 'fileList',*/}
                    {/*getValueFromEvent: this.normFile,*/}
                    {/*})(*/}
                    {/*<Upload name="logo" action="/upload.do" listType="picture">*/}
                    {/*<Button>*/}
                    {/*<Icon type="upload"/> Click to upload*/}
                    {/*</Button>*/}
                    {/*</Upload>*/}
                    {/*)}*/}
                    {/*</FormItem>*/}

                    <FormItem
                        wrapperCol={{span: 12, offset: 6}}
                    >
                        <Button type="primary" htmlType="submit" disabled={this.props.loading}>Submit</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedSelectForm = Form.create()(SelectForm);

export default WrappedSelectForm;
