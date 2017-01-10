<template>
  <div class="zhihu-list-cover mb1 rounded">
    <div class="clearfix p1">
      <div class="col col-3 center">
        <img :src="'http://lovestreet.leanapp.cn/zhihu/resource?url='+images" width="60" class="rounded" alt="">
      </div>
      <div class="col col-9">
        <p class="h6">{{title}}</p>
      </div>
    </div>
    <p class="h6"></p>
  </div>
</template>

<script>
  export default {
    props: ['title', 'images'],
    name: 'ZHihuListCover',
    components: {

    }
  }
</script>

<style>
.zhihu-list-cover {
  box-shadow:0px 0px 20px #dbdada;
}
</style>