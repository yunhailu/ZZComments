<template>
    <div class="home">
        <ul class="home-list" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li class="home-list-item" v-for="item in list" @click="toDetail(item)">
                <div class="home-list-item-con">
                    <div class="home-list-item-con-title">{{item.title}}</div>
                    <div class="home-list-item-con-desc">{{item.desc}}</div>
                </div>
                <div class="home-list-item-bottom">
                    <span class="bottom-item home-list-item-bottom-time">{{item.time}}</span>
                    <span class="bottom-item home-list-item-bottom-reply">回复: {{item.reply}}</span>
                    <span class="bottom-item home-list-item-bottom-view">浏览: {{item.view}}</span>
                </div>
            </li>
        </ul>
        <div></div>
        <div v-show="loading " class="home-loading">
            <loading></loading>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import 'List.less';
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
