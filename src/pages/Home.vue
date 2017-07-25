<template>
  <div>
    <h1>{{ msg }}</h1>
    <Headers></Headers>
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
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>