import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from './components/Common/login.vue'
import userDashboard from './components/Common/userDashboard.vue'
import adminDashboard from './components/Common/adminDashboard.vue'
import dashboard from './components/Common/dashboard.vue'


const router = new VueRouter({
    mode: 'history',
    routes : [
        { 
            path: '/', 
            component: Login,
            name: 'Login',
          
        },
        { 
            path: '/userdashboard', 
            component: userDashboard,
            name: 'userdashboard',
        },
        { 
            path: '/admindashboard', 
            component: adminDashboard,
            name: 'admindashboard',
        },
        { 
            path: '/dashboard', 
            component: dashboard,
            name: 'dashboard',
        },

    ]
});


export default router;