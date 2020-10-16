import Vue from 'vue'
import Vuex from 'vuex'

import demoService from './modules/demoService'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    demoService
  }
})
