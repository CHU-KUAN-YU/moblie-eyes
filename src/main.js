import { createApp } from 'vue'
const app = createApp(App)

import router from './router'
import App from './App.vue'

// Axors
import axios from 'axios'
// import VueAxios from 'vue-axios'

//修改 VUE 原型屬性
app.config.globalProperties.$ajax = axios

//懶加載
import { Lazyload } from 'vant'

//狀態管理Vuex
import store from './store'


/*   以下註解是router寫在main方法

// import { createWebHistory, createRouter } from 'vue-router'
//導入組件
import HomeView from './components/HomeView/HomeView.vue'
import AssortView from './components/AssortView/AssortView.vue'
import SearchView from './components/SearchView/SearchView.vue'
import CartView from './components/CartView/CartView.vue'
import MineView from './components/MineView/MineView.vue'

//定義路由規則
const routes = [
    {
        path: '/home',
        component: HomeView
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
*/


app.use(router).use(store).use(Lazyload).mount('#app')