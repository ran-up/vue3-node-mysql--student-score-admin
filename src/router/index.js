import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue')
        },
        {
            path: '/info',
            name: 'info',
            component: () => import('@/views/student-info/index.vue')
        },
        {
            path: '/update',
            name: 'update',
            component: () => import('@/views/update/index.vue')
        }
    ]
})

export default router
