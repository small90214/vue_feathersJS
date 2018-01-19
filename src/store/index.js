import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { state, mutations } from './mutations.js'
import * as getters from './getters.js'
import * as actions from './actions.js'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  VueResource,
  strict: true
})
