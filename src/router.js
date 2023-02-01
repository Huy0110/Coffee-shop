import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'dashboard/basic-dashboard',
            component: () => import('@/layouts/Layout'),
            children: [
                // Components
                {
                    name: 'OrderDetails',
                    path: 'order-detail/:order_detail_id',
                    component: () => import('@/views/pages/OrderDetails'),
                },

                {
                    name: 'Profile',
                    path: 'pages/profile',
                    component: () => import('@/views/pages/Profile'),
                },

                {
                    name: 'Icons',
                    path: 'pages/icons',
                    component: () => import('@/views/pages/Icons'),
                },

                {
                    name: 'NewOrders',
                    path: 'pages/new-orders',
                    component: () => import('@/views/pages/NewOrders'),
                },
                {
                    name: 'PaymentHistory',
                    path: 'pages/payment-history',
                    component: () => import('@/views/pages/PaymentHistory'),
                },


                {
                    name: 'Dashboard',
                    path: 'dashboard/basic-dashboard',
                    component: () => import('@/views/dashboard/BasicDashboard'),
                },
                {
                    name: 'Login',
                    path: 'dashboard/login',
                    component: () => import('@/views/Login.vue'),
                },
                {
                    name: 'RegisterUser',
                    path: 'dashboard/register',
                    component: () => import('@/views/RegisterUser.vue'),
                },

            ]

        },
        {
            path: '/',
            redirect: 'dashboard/basic-dashboard',
            component: () => import('@/layouts/Layout'),
        },


    ],
})