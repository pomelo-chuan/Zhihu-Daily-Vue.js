<template>
    <div class="ml2 mt1 mr2">
        <LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
        <div v-for="item in DONE_NEWS_LATEST.stories">
            <router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
                <ZHihuListCover :title="item.title" :images="item.images[0]"></ZHihuListCover>
            </router-link>
        </div>
        <button v-show="!DONE_LOADING_ONE && !DONE_LOADING_TWO" @click="LoadMoreNews()" class="load-more-button pl2 pr2 pt1 pb1 mb2 mt1 rounded">More</button>
        <LoadingOne v-show="DONE_LOADING_ONE"></LoadingOne>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import ZHihuListCover from '../components/List/ZHihuListCover'
    import LoadingOne from '../components/common/LoadingOne'
    import LoadingTwo from '../components/common/LoadingTwo'
    export default {
        name: 'App',
        components: {
            ZHihuListCover,
            LoadingOne,
            LoadingTwo
        },
        computed: {
            ...mapGetters(['DONE_NEWS_LATEST', 'DONE_LOADING_ONE', 'DONE_LOADING_TWO'])
        },
        
        created: function () {
            if (!!this.DONE_NEWS_LATEST.stories && this.DONE_NEWS_LATEST.stories.length > 0){
            } else {
                this.$store.dispatch('FECTH_NEWS_LATEST')
            }
        },
        methods: {
            LoadMoreNews: function () {
                this.$store.dispatch('FECTH_NEWS_LATEST_MORE')
            }
        }
    }
</script>

<style>
.load-more-button{
    /* ===style format=== */
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    outline: none;
    /* ===color=== */
    background-color: #00B4FF;
    color: white;
    font-size: 0.8rem;
    box-shadow:0px 0px 20px #dbdada;
    /* ===size and position=== */
    margin-left: 50%;
    transform: translateX(-50%);
    }


</style>