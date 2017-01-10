import Vue from 'vue'
import Vuex from 'vuex'
import zhihudata from './modules/zhihudata.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    zhihudata
  }
})