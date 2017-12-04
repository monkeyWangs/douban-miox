/**
 * @author monkeywang
 * Date: 17/12/4
 */
require('./check-versions')();
require('shelljs/global');

var inquirer = require('inquirer');

inquirer.prompt([{
  name: 'env',
  message: '请选择编译环境（choose build env）',
  type: 'list',
  default: 'development',
  choices: ['development', 'prepub', 'production']
}]).then(function (answers) {
  var cmd = `BUILD_ENV="${answers.env}" NODE_ENV="production" node build/build.js`;

  console.log();
  console.log('   $ ' + cmd);
  console.log();
  console.log('   building...');

  exec(cmd);
});
