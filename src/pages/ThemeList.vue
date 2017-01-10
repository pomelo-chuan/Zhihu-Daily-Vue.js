<template>
  <div class="theme-list m2">
  <div v-for="item in DONE_THEMES_LIST.stories">
    <p v-if="item.type == 0">{{item.title}}</p>
    <ZHihuListCover v-if="item.type == 2" :title="item.title" :images="item.images[0]"></ZHihuListCover>
  </div>
  </div>
</template>

<script>
import {
    mapGetters
  } from 'vuex'
import ZHihuListCover from '../components/List/ZHihuListCover'  
export default {
  name: 'ThemeList',
  components: {
    ZHihuListCover
  },
  computed: {
            ...mapGetters(['DONE_THEMES_LIST'])
    },
    created: function () {
      this.$store.dispatch('FETCH_THEMES_list', this.$route.params.id)
    }
}
</script>

<style>

</style>
