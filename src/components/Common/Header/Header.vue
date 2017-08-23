<template>
    <div class="header">
        <mt-navbar v-model="selected" :fixed="true" class="header-navs">
            <mt-tab-item id="1" class="header-navs-item">全部话题</mt-tab-item>
            <mt-tab-item id="2" class="header-navs-item">我要发布</mt-tab-item>
        </mt-navbar>
    </div>
</template>

<style scoped lang="less">
    @import 'Header.less';
</style>

<script>
    import _ from 'underscore';
    import Vue from 'vue';
    import { Navbar, TabItem } from 'mint-ui';
    import Config from './config';

    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: 'header',
        props: [],
        data () {
            const routeName = this.$route.name;
            const currentObj = _.find(Config.data, item => (item.router == routeName));
            return {
                selected: currentObj.index
            };
        },
        methods: {

        },
        watch: {
            selected (val, old) {
                const path = ['list', 'publish'];
                this.$router.push({ name: path[val - 1] });
            }
        }
    };
</script>
