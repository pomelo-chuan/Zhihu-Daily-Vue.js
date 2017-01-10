import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from './Root'
import App from './pages/App'
import Description from './components/Description'
import NewsDetail from './components/content/NewsDetail'

Vue.use(VueRouter)

const routers = [{
    path: '/',
    component: App
},{
    path: '/description',
    component :Description
},{
    path: '/news-detail/:id',
    name: 'news-detail',
    component: NewsDetail
}]

export const router = new VueRouter({
    mode: 'history',
    routes: routers,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})