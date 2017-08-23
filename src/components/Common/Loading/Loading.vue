<template>
    <div class="loading">
        <mt-spinner class="loading-icon" type="snake" :size="20"></mt-spinner>
        <span class="loading-text">载入中 ...</span>
    </div>
</template>

<style scoped lang="less">
    @import 'Loading.less';
</style>

<script>
    import Vue from 'vue';
    import { Spinner } from 'mint-ui';

    Vue.component(Spinner.name, Spinner);

    export default {
        name: 'loading',
        data () {
            return {

            };
        },
        methods: {

        }
    };
</script>
