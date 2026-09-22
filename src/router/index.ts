import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: () => import('../views/HomeView.vue'),
		},
		{
			path: '/chorus',
			component: () => import('../views/ChorusView.vue'),
		},
	],
})

export default router
