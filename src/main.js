// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'miox-css'
import Miox from 'miox'
import Engine from 'miox-vue2x'
import Route from './router/index'
import '../node_modules/VVUI/packages/theme-default/lib/index.css'
import Vue from 'vue'
import VVUI from 'vvui'

import plugins from './assets/js/plugins'

Vue.use(VVUI)

// 新建Miox对象
const app = new Miox({
  max: 1
})

// 各种事件
/* eslint-disable */
app.on('500', err => console.error(err.stack))
app.on('404', err => console.warn('404 Not found'))
app.on('process:start', () => console.log('process:start'))
app.on('process:end', () => console.log('process:end'))

// 设置引擎
app.install(Engine)

// 设置路由
app.use(Route.routes())
Vue.use(plugins, app)

// 启动服务监听
export default app.listen()

