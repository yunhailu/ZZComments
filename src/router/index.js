import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import List from '@/components/List/List';
import Publish from '@/components/Publish/Publish';
import Detail from '@/components/Detail/Detail';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/detail/:parId',
            name: 'detail',
            component: Detail
        }, {
            path: '/home',
            // name: 'home',
            component: Home,
            children: [{
                path: '/',
                name: 'list',
                component: List
            }, {
                path: 'publish',
                name: 'publish',
                component: Publish
            }]
        }
    ]
});
