<template>
    <div class="ml2 mt1 mr2">
        <LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
        <div v-for="item in DONE_NEWS_LATEST.stories">
            <router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
<ZHihuListCover :title="item.title" :images="item.images[0]"></ZHihuListCover>
</router-link>
</div>
<button v-show="!DONE_LOADING_ONE && !DONE_LOADING_TWO" @click="LoadMoreNews()" class="load-more-button pl2 pr2 pt1 pb1 mb2 mt1">更多</button>
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
    import BackToTop from '../components/common/BackToTop'

    export default {
        name: 'App',
        components: {
            ZHihuListCover,
            LoadingOne,
            LoadingTwo,
            BackToTop
        },
        computed: {
            ...mapGetters(['DONE_NEWS_LATEST', 'DONE_LOADING_ONE', 'DONE_LOADING_TWO'])
        },

        created: function () {
            if (!!this.DONE_NEWS_LATEST.stories && this.DONE_NEWS_LATEST.stories.length > 0) {
            } else {
                this.$store.dispatch('FECTH_NEWS_LATEST')
            }
        },
        methods: {
            LoadMoreNews: function () {
                this.$store.dispatch('FECTH_NEWS_LATEST_MORE')
            },
            backTop: function () {
                if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
                    //document.getElementById("scrollto").style.display = "block";
                    console.log(document.documentElement.scrollTop + document.body.scrollTop)
                    this.$store.dispatch('FECTH_NEWS_LATEST_MORE')
                }
                else {
                    //document.getElementById("scrollto").style.display = "none";
                    console.log(2)
                }
            }
        }

    }
</script>

<style>
/* ===the style of load more button=== */
.load-more-button{
    /* ===style format=== */
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    outline: none;
    /* ===color=== */
    background-color: white;
    color: black;
    font-size: 0.8rem;
    border-bottom: 1px solid #efefef;
    /*box-shadow:0px 0px 20px #dbdada;*/
    /* ===size and position=== */
    width: 100%;
    }

/* ===the style of back to top=== */
.back-to--button{
    /* ===style format=== */
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    outline: none;
    /* ===color=== */
    color: white;
    font-size: 0.8rem;
    opacity: 0.7;
    /* ===size and position=== */
    position: fixed; 
    right: 1rem; 
    bottom: 0rem; 
    display: none;
}

</style>