import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Schedule from '@/components/Schedule'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/schedule',
			name: 'schedule',
			component: Schedule,
		}
	],
  mode: 'history'
})

export default router