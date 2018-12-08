import React from 'react';
import {Link} from 'react-router';
import {UpdateGPA1, UpdateGPA2} from '../components/UpdateComponentDemo';

module.exports = [
  {
    key: 'id',
    title: 'ID',
    dataType: 'varchar',
    primary: true,
    // 当前列如何渲染
    render(text) {
      // 只是一个例子, 说明下render函数中可以用this, 甚至可以this.setState之类的
      // 我会把this绑定到当前的InnerTable组件上
      // 但需要注意, 如果要使用this, render必须是普通的函数, 不能是箭头函数, 因为箭头函数不能手动绑定this
      // this不要滥用, 搞出内存泄漏就不好了
      // render应该尽量是一个纯函数, 不要有副作用
      // console.log(this.props.tableName);
      return text;
    },
    // 表格中根据这一列排序, 排序规则可以配置
    //sorter: (a, b) => a.id - b.id,
  },

  {
    key: 'title',
    title: '商品名称',
    dataType: 'varchar',
    validator: [{type: 'string', max: 10, message: '最多10个字符!'}],
  },

  {
    key: 'cover',
    title: '商品图片',
    dataType: 'varchar',
    showType: 'image',
    sizeLimit: 500,  // 限制图片大小, 单位kb, 如果不设置这个属性, 就使用默认配置, 见config.js中相关配置
    max: 1,  // 最多可以上传几张图片? 默认1
    // 默认值, 可以是string也可以是string array, 跟max有关
    defaultValue: 'http://jxy.me/about/avatar.jpg',
    width: 100,  // 图片在表格中显示时会撑满宽度, 为了美观要自己调整下
    accept: '.jpg',  // 允许上传的文件类型, 可以省略, 默认值是".jpg,.png,.gif,.jpeg"
    placeholder:'aaa',  // 提示语
  },

  {
    key: 'description',
    title: '商品描述',
    dataType: 'varchar',
    validator: [{type: 'string', max: 300, message: '最多300个字符!'}],
  },

  {
    key: 'price',
    title: '商品价格',
    dataType: 'float',
    primary: true,
    // 当前列如何渲染
    render(text) {
      // 只是一个例子, 说明下render函数中可以用this, 甚至可以this.setState之类的
      // 我会把this绑定到当前的InnerTable组件上
      // 但需要注意, 如果要使用this, render必须是普通的函数, 不能是箭头函数, 因为箭头函数不能手动绑定this
      // this不要滥用, 搞出内存泄漏就不好了
      // render应该尽量是一个纯函数, 不要有副作用
      // console.log(this.props.tableName);
      return text;
    },
    // 表格中根据这一列排序, 排序规则可以配置
    //sorter: (a, b) => a.id - b.id,
  },

  {
    key: 'hot',
    title: '商品热度',
    dataType: 'int',
    primary: true,
    // 当前列如何渲染
    render(text) {
      // 只是一个例子, 说明下render函数中可以用this, 甚至可以this.setState之类的
      // 我会把this绑定到当前的InnerTable组件上
      // 但需要注意, 如果要使用this, render必须是普通的函数, 不能是箭头函数, 因为箭头函数不能手动绑定this
      // this不要滥用, 搞出内存泄漏就不好了
      // render应该尽量是一个纯函数, 不要有副作用
      // console.log(this.props.tableName);
      return text;
    },
    // 表格中根据这一列排序, 排序规则可以配置
    //sorter: (a, b) => a.id - b.id,
  },

  {
    key: 'commentCount',
    title: '商品数量',
    dataType: 'int',
    primary: true,
    // 当前列如何渲染
    render(text) {
      // 只是一个例子, 说明下render函数中可以用this, 甚至可以this.setState之类的
      // 我会把this绑定到当前的InnerTable组件上
      // 但需要注意, 如果要使用this, render必须是普通的函数, 不能是箭头函数, 因为箭头函数不能手动绑定this
      // this不要滥用, 搞出内存泄漏就不好了
      // render应该尽量是一个纯函数, 不要有副作用
      // console.log(this.props.tableName);
      return text;
    },
    // 表格中根据这一列排序, 排序规则可以配置
    //sorter: (a, b) => a.id - b.id,
  },,
  // 定义针对单条记录的操作
  // 常见的针对单条记录的自定义操作有哪些? 无非是更新和删除
  // 注意, 如果没有定义主键, 是不允许更新和删除的
  {
    // 这个key是我预先定义好的, 注意不要冲突
    key: 'singleRecordActions',
    title: '商品操作',  // 列名
    width: 300,  // 宽度
    actions: [
      // 如果有一些特殊的需求, 或者想要更好的交互, 可以用自定义组件实现对单条记录的更新
      // 一个常见的情况是DB中某个varchar字段存储的是json, 如果用textarea去编辑json对用户很不友好, 也容易出错, 这时候就可以用自定义组件了
      // 但自定义的组件必须遵守一些约定, 有点像java的接口, 参考我的例子
      {
        name: '申请数量',
        type: 'component',
        component: UpdateGPA1,  // 要渲染哪个组件, 这个组件会被渲染到modal中
      },
    ],
  },
];
