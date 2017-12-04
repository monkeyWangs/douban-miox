/**
 * @author monkeywang
 * Date: 17/12/4
 */
var fs = require('fs');
var path = require('path');

// 生成配置文件的路径
var configPath = path.resolve(__dirname, '../src/config.json');

// 生成config文件
fs.writeFileSync(configPath, JSON.stringify({
  apiEnv: 'development'
}, null, 4));

console.log(configPath + ' had credted');
