import Router from 'miox-router'

import HomePage from '../views/index.vue'
import Detail from '../views/detail.vue'

const route = new Router()

/* eslint-disable */
route.patch('/', async ctx => {
  await ctx.render(HomePage)
})

route.patch('/detail/:subjectId', async ctx => {
  await ctx.render(Detail)
})

export default route
