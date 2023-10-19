import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/serverlist/homePage/HomeView.vue")
    },
    {
        path: '/callback',
        name: 'callback',
        component: () => import("../views/appComponents/authenticatingComponent.vue")
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
