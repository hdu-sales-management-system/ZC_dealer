// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复

module.exports = [
  {
    key: 'id',  // 传递给后端的字段名
    title: 'ID',  // 前端显示的名称
    dataType: 'varchar',
  },
  {
    key: 'title',
    title: '商品名称',
    dataType: 'varchar',
  },

  {
    key: 'isGetatable',//商品是否可以被申请
    title: '是否有存货',
    dataType: 'varchar',
    showType: 'radio',
    options: [{key: 'yes', value: '是'}, {key: 'no', value: '否'}],
  },
  // 级联选择, 和select很类似
  // 同样支持placeholder/defaultValue等属性
  
];
