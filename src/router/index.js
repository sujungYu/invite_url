import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Invite from '../components/Invite.vue'
import Login from '../components/Login.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
            props: true,
        },
        {
            path: '/home/:id',
            name: 'Home',
            component: Home,
            props: true,
        },
        {
            path: '/home/:id/invite',
            name: 'Invite',
            component: Invite,
            props: true,
          },
         
    ]
})