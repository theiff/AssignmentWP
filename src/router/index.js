import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import contact from '@/components/contact'
import UpdateUser from '@/components/UpdateUser'
import Vue from 'vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home 
        },

        {
            path: '/login',
            name: 'Login',
            component: Login 
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact 
        },
        {
            path: '/updateuser/:userId',
            name: 'UpdateUser',
            component: UpdateUser
        }
    ]
}








)