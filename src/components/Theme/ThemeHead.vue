<template>
    <div class="theme-head">
        <img :src="'http://lovestreet.leanapp.cn/zhihu/resource?url=' + image" style="width: 100%" alt="">
        <div class="theme-head-name ml2">
            <p class="pl1 pt1 h5 bold">{{name}}:</p>
            <p class="pt1 pb1 pl2 pr1 h6">{{description}}</p>
        </div>
        <div class="theme-head-editor ml2 mr2 p1">
            <h4 class="inline">主编：</h4>
            <p class="inline h6" v-for="item in editors">{{item.name}} &nbsp;</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ThemeHead',
        props: ["image", "name", "description", "editors"],
        components: {

        }
    }
</script>

<style>
.theme-head{
    height: 100%;
    width: 100%;
}
.theme-head-name {
    position: absolute;
    transform: translateY(-4rem);
    background-color: grey;
    opacity: 0.9;
}
.theme-head-name p{
    border-left: 4px solid #00B4FF;
    text-indent: 0.5em;
    color: white;
}
.theme-head-name p {
    margin: 0;
}
.theme-head-editor{
    color: grey;
}
</style>