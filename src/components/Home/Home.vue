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
    import resp from './data';

    Vue.component(Spinner.name, Spinner);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(Button.name, Button);
    Vue.use(InfiniteScroll);

    export default {
        name: 'home',
        data () {
            return {
                selected: '1',
                loading: false,
                list: [],
                msg: 'Welcome to App Home!'
            };
        },
        methods: {
            changeTab (index) {
                console.log(index);
                this.selected = index;
                window.scrollTo(0, 0);
            },
            toPublish () {
                this.$router.push({name: 'publish'});
            },
            toDetail (item) {
                console.log(item);
                const { id } = item;
                this.$router.push({name: 'detail', params: { id }});
            },
            loadMore () {
                if (this.selected == 1) {
                    this.loading = true;
                    setTimeout(() => {
                        let data = resp.list1;
                        for (let i = 1, len = data.length; i <= len; i++) {
                            this.list = this.list.concat(data);
                        }
                        this.loading = false;
                    }, 1500);
                }
            }
        },
        components: { Loading, HeaderTabs }
    };
</script>
