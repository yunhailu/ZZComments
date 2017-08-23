<template>
    <div class="publish">
        <!--<header-tabs></header-tabs>-->
        <div class="publish-container">
            <div class="publish-container-items">
                <div class="publish-container-items-label">标题:</div>
                <input class="publish-container-items-text" type="text" placeholder="输入你想说的话题, 不超过30字" />
            </div>
            <div class="publish-container-items">
                <div class="publish-container-items-label">描述:</div>
                <textarea class="publish-container-items-text" placeholder="输入你想说的内容, 不超过500字" rows="5" />
            </div>
            <div class="publish-container-intro">
                <div class="publish-container-intro-title">听心的声音~</div>
                <ul class="publish-container-intro-list">
                    <li v-for="intro in intros">{{intro}}</li>
                </ul>
            </div>
        </div>
        <div class="publish-bottom">
            <mt-button type="primary" class="publish-bottom-btn" @click="publishSubmit">确认提交</mt-button>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import 'Publish.less';
</style>

<script>
    import Vue from 'vue';
    import { Button, Toast } from 'mint-ui';
    import HeaderTabs from '../Common/Header/Header.vue';

    Vue.component(Button.name, Button);

    export default {
        name: 'publish',
        data () {
            return {
                submiting: false,
                desc: '',
                title: '',
                intros: [
                    '1.说说吧目的是为了转转的兄弟姐妹们平时, 想说不好说、想说不敢说、想说没地说的话, 建立一个诉说的渠道。',
                    '2.此程序所有代码均未记录任何用户信息, 包括后台日志, 即您所说的每一句话, 将来都不可能作为呈堂证供^^。'
                ],
                msg: 'Welcome to App Publish!'
            };
        },
        methods: {
            publishSubmit () {
                if (this.submiting) return;
                this.submiting = true;
                let instance = Toast({
                    position: 'middle',
                    message: '提交成功'
                });
                setTimeout(() => {
                    this.submiting = false;
                    instance.close();
                }, 2000);
            }
        },
        components: { HeaderTabs }
    };
</script>
