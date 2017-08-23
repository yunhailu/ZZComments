// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
import flexible from './libs/flexible';

const Application = {
    launch () {
        this.init();

        Vue.config.productionTip = false;

        Vue.use(MintUI);

        /* eslint-disable no-new */
        new Vue({
            el: '#app',
            router,
            template: '<App/>',
            components: { App }
        });
    },
    init () {
        flexible();
    }
};

Application.launch();