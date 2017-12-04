import Router from 'miox-router'

import HomePage from '../views/index.vue'
import Detail from '../views/detail.vue'
import Login from '../views/users/login.vue'
import Home from '../views/users/home.vue'

const route = new Router()

/* eslint-disable */
route.patch('/', async ctx => {
  await ctx.render(HomePage)
})

route.patch('/detail', async ctx => {
  await ctx.render(Detail)
})

route.patch('/login', async ctx => {
  localStorage.getItem('username') ? await ctx.render(Home) : await ctx.render(Login)
})

export default route
