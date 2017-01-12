<template>
  <div class="loading-two center">
    <img src="../../../static/zhihu-icon2.png" height="50" class="inline-block double-flash" alt="">
    <p class="h6">正在加载...</p>
  </div>
</template>

<script>

  export default {
    name: 'LoadingTwo',
    components: {

    }
  }
</script>

<style scoped>
.loading-two{
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding-top: 25%;
}
.loading-two p {
  
}
.double-flash {
  animation: double-flash_5308 3s ease infinite;
  transform-origin: 50% 50%;
}

@keyframes double-flash_5308 {
  0% { opacity:1 }
  12.5% { opacity:0 }
  25% { opacity:1 }
  37.5% { opacity:0 }
  50% { opacity:1 }
  100% { opacity:1 }
}
</style>