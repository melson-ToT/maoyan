import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/", 
        redirect:"/home",//默认（../views/Home/HomeF.vue）为重定向
    },
    {
        path: "/home", //自带#号
        component: () => import("../views/Home/HomeF.vue")
    },
    {
        path: "/city", 
        component: () => import("../views/city/cityIndex.vue")  
    },
    {
        path: "/detail/:id", 
        props:true,
        component: () => import("../views/detail/detailIndex.vue")  
    },
    {
        path: "*", //404报错
        component:() => import("../views/NotFound/NotFound.vue")
    }
]

const router = new VueRouter({
    routes,
})

export default router