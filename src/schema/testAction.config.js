module.exports = {
  showExport: true,
  showImport: true,
  showInsert: false,
  showUpdate: false,
  showDelete: false,
  asyncSchema: false,  // 是否异步加载schema, 默认false
  ignoreSchemaCache: false,  // 如果异步加载schema, 是否忽略缓存, 默认只会请求一次后端然后将结果缓存起来
};
