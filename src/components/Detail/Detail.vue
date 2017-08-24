<template>
    <div class="detail">
        <div class="detail-container">
            <div class="detail-container-topic">
                <div class="detail-container-topic-title">{{title}}</div>
                <div class="detail-container-topic-desc">{{content}}</div>
                <div class="detail-container-topic-bottom">
                    <span class="item detail-container-topic-bottom-view">浏览: {{readCount}}</span>
                    <span class="item detail-container-topic-bottom-replay">回复: {{replayCount}}</span>
                </div>
            </div>
            <div class="detail-container-comments">
                <div class="detail-container-comments-title">{{replayCount}}个回帖</div>
                <ul class="detail-container-comments-list"
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading && noMore"
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
    import Loading from '../Common/Loading/Loading.vue';
    import { zzFeedbackAppDetailItem, zzFeedbackAppDetailReplay } from '../../libs/Api';

    Vue.component(Button.name, Button);

    export default {
        name: 'detail-container',
        data () {
            return {
                parId: this.$route.params.parId,
                pageIndex: 0,
                title: '',
                content: '',
                readCount: '',
                replayCount: '',
                comments: [],
                loading: false,
                noMore: false,
                msg: 'Welcome to App detail-container!'
            };
        },
        methods: {
            loadMore () {
                const parId = this.parId;
                const pageIndex = this.pageIndex;
                if (!this.noMore) {
                    this.getComments(parId, pageIndex);
                }
            },
            getComments (parId, pageIndex) {
                this.loading = true;
                return zzFeedbackAppDetailReplay({ parId, pageIndex }).then(resp => {
                    if (resp.respCode == 0 && resp.respData) {
                        this.loading = false;
                        if (resp.respData.length == 0) {
                            this.noMore = true;
                            return;
                        }
                        this.comments = this.comments.concat(resp.respData);
                        this.pageIndex += 1;
                        return;
                    }
                });
            },
            getDetail (parId) {
                return zzFeedbackAppDetailItem({ parId }).then(resp => {
                    if (resp.respCode == 0 && resp.respData) {
                        this.title = resp.respData.title;
                        this.content = resp.respData.content;
                        this.readCount = resp.respData.readCount;
                        this.replayCount = resp.respData.replayCount;
                    }
                });
            },
            init () {
                const parId = this.parId;
                this.getDetail(parId);
            }
        },
        mounted () {
            this.init();
        },
        components: { Loading }
    };
</script>
