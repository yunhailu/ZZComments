<template>
    <div class="home">
        <header-tabs></header-tabs>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style scoped lang="less">
    @import 'Home.less';
</style>

<script>
    import Vue from 'vue';
    import { Button, Spinner, InfiniteScroll, Navbar, TabItem } from 'mint-ui';
    import Loading from '../Common/Loading/Loading.vue';
    import HeaderTabs from '../Common/Header/Header.vue';
//    import resp from './data';

    Vue.component(Spinner.name, Spinner);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(Button.name, Button);
    Vue.use(InfiniteScroll);

    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to App Home!'
            };
        },
        methods: {

        },
        components: { Loading, HeaderTabs }
    };
</script>
