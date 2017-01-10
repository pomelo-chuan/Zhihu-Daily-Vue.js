<template>
    <div class="zhihu-head">
        <div class="fixed top-0 left-0 right-0 pt1 pl0 pb1">
            <router-link to="/" class="inline-block h5 bold text-decoration-none ml3">
                <img :src="ZhihuIcon" height="18" class="fixed"> 知乎日报
            </router-link>
            <ul class="zhihu-head list-reset inline-block right">
                <li class="inline-block mr1 h6">
                    <button :class="zhihuHeadNavButtonStyle" @click="showTage()">栏目</button>
                </li>
                <li class="inline-block mr1 h6">
                    <router-link to="/description" class="text-decoration-none">关于</router-link>
                </li>
            </ul>
        </div>
        <div style="height: 2.1rem"></div>
<div :class="zhihuHeadNavBarStyle">
    <div class="zhih-head-nav-content"></div>
    
</div>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
                ZhihuIcon: '../../static/zhihu-icon.png',
                zhihuHeadNavBarStyle: 'zhihu-head-nav-bar-off',
                zhihuHeadNavButtonStyle: 'zhihu-head-nav-bar-button-off'
            }
        },
        name: 'ZhihuHead',
        components: {

        },
        methods: {
            showTage: function () {
                if (this.zhihuHeadNavBarStyle == 'zhihu-head-nav-bar-off') {
                    this.zhihuHeadNavBarStyle = 'zhihu-head-nav-bar-on'
                    this.zhihuHeadNavButtonStyle = 'zhihu-head-nav-bar-button-on'
                } else {
                    this.zhihuHeadNavBarStyle = 'zhihu-head-nav-bar-off'
                    this.zhihuHeadNavButtonStyle = 'zhihu-head-nav-bar-button-off'
                }
            }
        }
    }
</script>

<style>
.zhihu-head div:nth-child(1){
      border-bottom: 1px solid #f3f3f3;
      background-color: white;
}
.zhihu-head div img {
    left: 0.5rem;
}

.zhihu-head div a{
    color: black;
}
.zhihu-head li a{
    color: black;
}
.zhihu-head-nav-bar-on {
    /* ===size and position=== */
    height: 10rem;
    width: 100vw;
    position: fixed;
    /* ===color and other=== */
    background-color: white;
    transition: height 0.8s ease;
    border-bottom: 1px solid #f3f3f3;
}
.zhihu-head-nav-bar-off {
    /* ===size and position=== */
    height: 0;
    width: 100vw;
    position: fixed;
    /* ===color and other=== */
    background-color: white;
    transition: height 0.5s ease;
    border-bottom: 1px solid #f3f3f3;
}
.zhihu-head-nav-bar-button-on {
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    background-color: white;
    outline: none;
    font-size: 0.75rem;
    padding: 0.1rem;
    /* ===the border=== */
    border-bottom: 2px solid #00B4FF;
}
.zhihu-head-nav-bar-button-off {
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    background-color: white;
    outline: none;
    font-size: 0.75rem;
    padding: 0.1rem;
    /* ===the border=== */
    border-bottom: 0 solid #00B4FF;
}
</style>