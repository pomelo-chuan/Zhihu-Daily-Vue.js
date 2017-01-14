<template>
    <div>
        <div class="top-story">
            <!--<div v-for="item in newsLatest.top_stories">-->
            <img :class="'topStoryImg' + index" v-for="(item, index) in newsLatest.top_stories" :src="'http://lovestreet.leanapp.cn/zhihu/resource?url=' + item.image"
                alt="">
            <!--<p>{{item.title}}</p>-->
            <!--</div>-->
        </div>
        <div style="padding-top: 400px"></div>
</div>
</template>

<script>

    export default {
        props: ["newsLatest"],
        name: 'TopStory',
        components: {

        },
        created: function () {
            var that = this
            setInterval(function(){
                that.topStoryImg1 = "top-story-show"
                console.log(that.topStoryImg1)
            }, 1000)
        }
    }
</script>

<style>
.top-story img{
    width: 90%;
    position: absolute;
    opacity: 0;
}
.top-story-show {
    opacity: 1;
    transform: translateY(100px)
}


</style>