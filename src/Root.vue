<template>
  <div>
    <ZhihuHead></ZhihuHead>
    <router-view></router-view>
  </div>
</template>

<script>
  import ZhihuHead from './components/ZhihuHead'
  // 引入basscss
  require('basscss/css/basscss.min.css')
  export default {
    name: 'root',
    components: {
      ZhihuHead
    }
  }
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html {
  font-size: 20px;
}
</style>