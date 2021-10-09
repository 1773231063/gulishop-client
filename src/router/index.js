import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Home from '@/pages/Home'


let originPush = VueRouter.prototype.push

VueRouter.prototype.push = function (location,resolved,rejected) {
    if (resolved === undefined || rejected === undefined) {
        originPush.call(this,location).catch(()=>{})
    } else {
        originPush.call(this,location,resolved,rejected)
    }
}

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component:Home
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isHidden:true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isHidden:true
            }
        },
        {
            path: '/search/:keyword',
            name:'search',
            component:Search,
        },
        {
            path: '/',
            redirect:'/home'
        }
    ]
})