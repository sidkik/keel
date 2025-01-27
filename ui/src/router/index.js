import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'keel',
  scrollBehavior: () => ({ y: 0 }),
  // routes: constantRouterMap
  routes: constantRouterMap.concat(asyncRouterMap)
})
