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
<button @click="backToTop" class="back-to--button pl2 pr2 pt1 pb1 mb2 mt1 rounded" id="scrollto">Top</button>
<!--<BackToTop v-show="BackToTopIsShow"></BackToTop>-->
</div>
</template>

<script>
    window.onscroll = function () {
        if (document.documentElement.scrollTop + document.body.scrollTop > 1000) {
            document.getElementById("scrollto").style.display = "block";
        }
        else {
            document.getElementById("scrollto").style.display = "none";
        }
    }
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
            },
            backToTop: function () {
                window.scrollTo(0, 0)
                
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
.back-to--button{
    /* ===style format=== */
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    outline: none;
    /* ===color=== */
    /*background-color: grey;*/
    color: white;
    font-size: 0.8rem;
    /*box-shadow:0px 0px 20px grey;*/
    opacity: 0.7;
    /* ===size and position=== */
    position: fixed; 
    right: 1rem; 
    bottom: 0rem; 
    display: none;

}

</style>