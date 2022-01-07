import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/signup',
            component: () => import('@/views/SignUpPage.vue'),
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/main',
            component: () => import('@/views/MainPage.vue'),
            meta: { auth:true },
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('../components/ForgotPassword.vue')
        }
    ]
});

export default router;