import Vue from 'vue'
import Router from 'vue-router'
import Invite from '../components/Invite.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/band/:id/',
            name: 'Invite',
            component: Invite,
            props: true,
        }
    ]
})