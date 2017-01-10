// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root.vue'
import {router} from './routers'
import store from './vuex/store.js'

Vue.filter("ImgSrc", function(value) {
//   for(var i = 0;value[i];i++){
//    return value[i].setAttribute('src', 'http://http://lovestreet.leanapp.cn/zhihu/resource?url=' + (imgs[i].getAttribute('src') || ''));
// }
return value = "1123123"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Root/>',
  components: { Root },
  router,
  store
})
