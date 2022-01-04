import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePageView from "@/views/HomePageView";
import LoginPageView from "@/views/LoginPageView";
import RegistPageView from "@/views/RegistPageView";


Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePageView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPageView
        },
        {
            path: '/regist',
            name: 'regist',
            component: RegistPageView
        }
    ]
});

export default router;