<template>
    <div class="header">
        <mt-navbar v-model="selected" :fixed="true" class="header-navs">
            <mt-tab-item :id="tab.index" class="header-navs-item" v-for="tab in tabs" :key="tab.index">{{tab.name}}</mt-tab-item>
        </mt-navbar>
    </div>
</template>

<style scoped lang="less">
    @import 'Header.less';
</style>

<script>
    import Vue from 'vue';
    import _ from 'underscore';
    import { Navbar, TabItem } from 'mint-ui';
    import Config from './config';

    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: 'header',
        props: ['tabindex'],
        data () {
            return {
                selected: this.tabindex,
                tabs: Config.data
            };
        },
        methods: {

        },
        watch: {
            selected (val, old) {
                const route = _.find(Config.data, route => (route.index == val));
                this.$router.push({ name: route.router });
            }
        },
        beforeRouteEnter (to, from, next) {
            console.log('[header]', to);
            next(vm => {
                console.log(to);
            });
        }
    };
</script>

