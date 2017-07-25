<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Headers></Headers>
  </div>
</template>

<script>
  import Headers from './Headers.vue';
  export default {
    name: 'hello',
    components: {
      Headers
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>