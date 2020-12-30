import { createWebHistory, createRouter } from 'vue-router'

//導入組件
import HomeView from '../components/HomeView/HomeView.vue'
import AssortView from '../components/AssortView/AssortView.vue'
import SearchView from '../components/SearchView/SearchView.vue'
import CartView from '../components/CartView/CartView.vue'
import MineView from '../components/MineView/MineView.vue'

//定義路由規則

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/home',
        // component: HomeView,
        redirect: '/'
    },
    {
        path: '/assor',
        component: AssortView
    },
    {
        path: '/search',
        component: SearchView
    },
    {
        path: '/cart',
        component: CartView
    },
    {
        path: '/mine',
        component: MineView
    },
]


//使用router
const router = createRouter({
    // routes:routes
    history: createWebHistory(),
    routes
})


export default router;