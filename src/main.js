// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Resource from 'vue-resource';
import App from './App';
import router from './router';
import flexible from './libs/flexible';
import store from './store';

const Application = {
    launch () {
        this.init();

        Vue.config.productionTip = false;

        Vue.use(MintUI);
        Vue.use(Resource);

        Vue.http.options.xhr = { withCredentials: true };
        Vue.http.options.root = 'https://zhuan.58.com/crmentry';
        // Vue.http.options.root = 'http://10.252.218.10:3000';

        /* eslint-disable no-new */
        new Vue({
            el: '#app',
            router,
            store,
            template: '<App/>',
            components: { App }
        });
    },
    init () {
        flexible();
    }
};

Application.launch();