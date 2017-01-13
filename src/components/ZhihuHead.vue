<template>
    <div class="zhihu-head">
        <div class="fixed top-0 left-0 right-0 pt1 pl0 pb1">
            <router-link to="/" class="inline-block h5 text-decoration-none ml3" style="font-weight: 500;">
                <img src="../../static/zhihu-icon.png" height="20" class="fixed zhihu-head-icon"> 知乎日报
            </router-link>
            <ul class="zhihu-head list-reset inline-block right">
                <li class="inline-block mr1 h6">
                    <router-link to="/themes"  style="color: black;text-decoration: none">专题日报</router-link>
                </li>
                <li class="inline-block mr1 h6">
                    <router-link to="/description">关于</router-link>
                </li>
            </ul>
        </div>
        <div style="height: 2.5rem"></div>
</div>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
                ZhihuIcon: '../../static/zhihu-icon.png',
            
            }
        },
        name: 'ZhihuHead',
        components: {

        },
        methods: {
            
        }
    }
</script>

<style>
.zhihu-head {
    
}
.zhihu-head div:nth-child(1){
      border-bottom: 1px solid #f3f3f3;
      background-color: white;
      z-index: 999;
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
.router-link-active{
    font-weight: 800;
}
@media screen and (min-width: 640px) {
    .zhihu-head-icon {
        width: 25px;
        height: 25px;
    }
}
</style>