<template>
  <div>
    <div class="single13" v-show="true"></div>
    <header>
      <h3 class="center" vertical-align="center">Zhihu Daily</h3>
    </header>
  </div>
</template>

<script>
  import Headers from '../components/Headers';
  export default {
    name: 'home',
    components: {
      Headers
    },
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
  header {
    margin: 0.5rem;
    height: 10rem;
    background-color: grey;
    color: white;
  }

  .single13 {
    height: 10px;
    width: 100%;
    background: -webkit-linear-gradient(right, #ef4836, #f5d76e, #ef4836);
    background: linear-gradient(270deg, #ef4836, #f5d76e, #ef4836);
    background-size: 400% 400%;
    -webkit-animation: single13anim 3s ease-in-out infinite;
    animation: single13anim 3s ease-in-out infinite;
  }

  @-webkit-keyframes single13anim {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @keyframes single13anim {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
</style>