import Vue from 'vue';
import VueRouter from 'vue-router';

import Welcome from '../components/welcome.vue';
import List from '../components/list.vue';
import NotFound from '../components/not-found.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Welcome
        },
        {
            name: 'list',
            path: '/list',
            component: List
        },
        {
            path: '*',
            component: Welcome
        }
    ]
});

export default router;