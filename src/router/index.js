//路由配置文件

import Vue from 'vue'
import Router from 'vue-router' //导入路由vue-router库

//导入相关的组件
import Index from '@/components/Index'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import Four from '@/components/Four'
import Five from '@/components/Five'
import ThreeIndex from '@/components/ThreeIndex'
import ThreeOne from '@/components/ThreeOne'
import ThreeTwo from '@/components/ThreeTwo'
import ThreeThree from '@/components/ThreeThree'

Vue.use(Router)

//创建路由对象并配置,最后导出
export default new Router({
	routes: [
		//	path: 导航路径,/可以用来表示首页
		//  name: 组件名称
		//  component: 需要切换的组件
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/One',
			name: 'One',
			component: One
		},
		{
			path: '/Two',
			name: 'Two',
			component: Two
		},
		{
			path: '/Three',
			name: 'Three',
			component: Three,
			children: [
				{
					path: '/',
					name: 'ThreeIndex',
					component: ThreeIndex
				},
				{
					path: '/ThreeIndex',
					name: 'ThreeIndex',
					component: ThreeIndex
				},
				{
					path: '/ThreeOne',
					name: 'ThreeOne',
					component: ThreeOne
				}, 
				{
					path: '/ThreeTwo',
					name: 'ThreeTwo',
					component: ThreeTwo
				}, 
				{
					path: '/ThreeThree',
					name: 'ThreeThree',
					component: ThreeThree
				}
			]
			
		},
		{
			path: '/Four',
			name: 'Four',
			component: Four
		},
		{
			path: '/Five',
			name: 'Five',
			component: Five
		},
	]
});