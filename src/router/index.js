import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/hacpai/index'
import Comments from '../pages/hacpai/comments/index'
import User from '../pages/hacpai/users/index'


Vue.use(VueRouter)


// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
    routes:[{
        path: '/index', component: Home
    },{
        path: '/article/:oId', name:'article', component: Comments, props: true
    },{
        path: '/user/:userName', name:'user', component: User, props: true
    },{
        path:'*',redirect:'/index'
    }]
})


// 输出router
export default router;
