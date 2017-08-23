<template>
    <div class="detail">
        <div class="detail-container">
            <div class="detail-container-topic">
                <div class="detail-container-topic-title">{{title}}</div>
                <div class="detail-container-topic-desc">{{desc}}</div>
                <div class="detail-container-topic-bottom">
                    <span class="item detail-container-topic-bottom-view">浏览: 29</span>
                    <span class="item detail-container-topic-bottom-replay">回复: 5</span>
                </div>
            </div>
            <div class="detail-container-comments">
                <div class="detail-container-comments-title">65个回帖</div>
                <ul class="detail-container-comments-list"
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10">
                    <li class="detail-container-comments-list-item" v-for="(comment, index) in comments">
                        <div class="detail-container-comments-list-item-name">{{ index + 1 }}楼</div>
                        <div class="detail-container-comments-list-item-reply">{{comment.content}}</div>
                        <div class="detail-container-comments-list-item-bottom">
                            <div class="item detail-container-comments-list-item-bottom-time">{{comment.cTimeStamp}}</div>
                        </div>
                    </li>
                </ul>
                <div v-show="loading " class="detail-container-comments-loading">
                    <loading />
                </div>
            </div>
        </div>
        <div class="detail-bottom">
            <div class="detail-bottom-input">
                <input type="text" placeholder="输入你想说的内容" />
            </div>
            <div class="detail-bottom-btn">
                <div class="detail-bottom-btn-text">发送</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import 'detail.less';
</style>

<script>
    import Vue from 'vue';
    import { Button } from 'mint-ui';
    import resp from './data';
    import Loading from '../Common/Loading/Loading.vue';

    Vue.component(Button.name, Button);

    export default {
        name: 'detail-container',
        data () {
            return {
                title: '',
                desc: '',
                comments: [],
                loading: false,
                msg: 'Welcome to App detail-container!'
            };
        },
        methods: {
            loadMore () {
                this.loading = true;
                setTimeout(() => {
                    let data = resp.comments;
                    for (let i = 1, len = data.length; i <= len; i++) {
                        this.comments = this.comments.concat(data);
                    }
                    this.loading = false;
                }, 1500);
            },
            getDetail (id) {
                console.log(id);
                const data = resp;
                this.title = data.title;
                this.desc = data.desc;
                this.comments = data.comments;
            },
            init () {
                const id = this.$route.params.id;
                this.getDetail(id);
            }
        },
        mounted () {
            this.init();
        },
        components: { Loading }
    };
</script>
