<template>
    <div class="home">
        <ul class="home-list" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading && noMore"
            infinite-scroll-distance="10">
            <li class="home-list-item" v-for="item in list" @click="toDetail(item)">
                <div class="home-list-item-con">
                    <div class="home-list-item-con-title">{{item.title}}</div>
                    <div class="home-list-item-con-desc">{{item.content}}</div>
                </div>
                <div class="home-list-item-bottom">
                    <span class="bottom-item home-list-item-bottom-time">{{item.cTimeStamp}}</span>
                    <span class="bottom-item home-list-item-bottom-reply">回复: {{item.replayCount}}</span>
                    <span class="bottom-item home-list-item-bottom-view">浏览: {{item.readCount}}</span>
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
//    import resp from './data';
    import { zzFeedbackAppPage } from '../../libs/Api';

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
                noMore: false,
                list: [],
                pageIndex: 0,
                msg: 'Welcome to App List!'
            };
        },
        methods: {
            toDetail (item) {
                console.log(item);
                const { parId } = item;
                this.$router.push({name: 'detail', params: { parId }});
            },
            loadMore () {
                if (this.selected == 1) {
                    this.loading = true;
                    const pageIndex = this.pageIndex;
                    if (!this.noMore) {
                        this.getCommentsList(pageIndex);
                    }
                }
            },
            getCommentsList (pageIndex) {
                return zzFeedbackAppPage({ pageIndex }).then(resp => {
                    console.log(resp);
                    if (resp.respCode == 0) {
                        this.loading = false;
                        if (resp.respData.length == 0) {
                            this.noMore = true;
                            return;
                        }
                        this.list = this.list.concat(resp.respData);
                        this.pageIndex += 1;
                        return;
                    }
                });
            }
        },
        components: { Loading, HeaderTabs }
    };
</script>
