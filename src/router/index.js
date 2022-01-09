import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

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
            name:'main',
            path: '/main',
            component: () => import('@/views/MainPage.vue'),
            meta: { auth: true }
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('../components/ForgotPassword.vue')
        },
        {
            name: 'notFound',
            path: '*',
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ]
});

// router.beforeEach((to, from, next) => {
//     if(to.matched.some(function (routeInfo){
//         return routeInfo.meta.authRequired;
//     }))
//     {
//         window.alert('로그인이 필요합니다.');
//         next('/');
//     }
//     else {
//         console.log("routes success: `"+ to.path +"`");
//         next();
//     }
// });

// router.beforeEach((to, from, next) => {
//     if(store.state.authenticated == false) {
//         next('/login');
//         return
//     } else {
//         next();
//     }
// });


// router.beforeEach((to, from, next) => {
//     console.log(to);
//     if(to.meta.auth && !store.getters.isLogin) {
//         // console.log('인증이 필요합니다.');
//         next('/login');
//         return;
//     }
//     next();
// });

export default router;