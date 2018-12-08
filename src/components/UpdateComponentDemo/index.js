import React from 'react';
import {Slider, InputNumber, Row, Col, Rate} from 'antd';
import qs from 'qs';
import axios from 'axios';

/**
 * demo, 自定义组件实现单条数据更新
 */
class UpdateGPA1 extends React.PureComponent {
  state = {
    inputValue: 0,
  };
  num;
  sendToUrl="http://mock.yidafu.org/mock/5bed11641171b67e95b2131d/goodsApplication";
  /*componentWillMount() {
    // 当前选中的那条记录, 会以props.record的形式传进来
    this.state.inputValue = this.props.record.gpa;
  }

  componentWillReceiveProps(nextProps) {
    this.state.inputValue = nextProps.record.gpa;
  }*/

  onChange = (value) => {
    this.setState({inputValue: value});
    this.num=parseInt(value);
  };

  /**
   * 自定义的组件如果实现了这个方法, DBTable组件就会根据返回结果去更新对应的记录
   * 如果不实现这个方法, 或者这个方法返回的是false/undefined, 那就不做任何事
   * 如果是antd的Form.create()包装过的组件, 就不用自己实现这个方法了
   *
   * @returns {{gpa: number}}
   */
  getFieldsValue() {
    // 更新当前选中记录的gpa字段
    alert(this.props.record.id);
    var request_json={
      "id":this.props.record.id,
      "number_original":this.props.record.commentCount,
      "number_increase":this.num
    }
    axios.post(this.sendToUrl,qs.stringify(request_json)).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
    return {commentCount: this.state.inputValue};
  }

  render() {
    return (
      <Row>
        <Col span={4}>
          <InputNumber min={0} max={this.props.record.commentCount} style={{ marginLeft: 16 }} step={1} value={this.state.inputValue}
                       onChange={this.onChange}/>
        </Col>
      </Row>
    );
  }
}

/**
 * 另一个例子
 */
class UpdateGPA2 extends React.PureComponent {
  state = {
    inputValue: 0,
  };

  componentWillMount() {
    this.state.inputValue = this.props.record.gpa;
  }

  componentWillReceiveProps(nextProps) {
    this.state.inputValue = nextProps.record.gpa;
  }

  onChange = (value) => {
    this.setState({inputValue: value});
  };

  getFieldsValue() {
    return {gpa: this.state.inputValue};
  }

  render() {
    return (
      <span>
        <Rate count={10} allowHalf onChange={this.onChange} value={this.state.inputValue}/>
      </span>
    );
  }
}

export {UpdateGPA1, UpdateGPA2};
