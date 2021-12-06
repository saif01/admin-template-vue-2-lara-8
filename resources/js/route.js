import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import prestart from './components/Common/prestart.vue'
import Login from './components/Common/login.vue'
import login2 from './components/Common/login2.vue'
import userDashboard from './components/Common/userDashboard.vue'
import adminDashboard from './components/Common/adminDashboard.vue'
import dashboard from './components/Common/dashboard.vue'


const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: prestart,
            name: 'prestart',
          
        },
        { 
            path: '/login', 
            component: Login,
            name: 'Login',
          
        },
        { 
            path: '/login2', 
            component: login2,
            name: 'login2',
          
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