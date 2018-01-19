import * as types from './mutation_type.js'

export const state = {
  count: 0,
  init: false
}

export const mutations = {
  [types.INCREASE] (state) {
    state.count += 1
  },
  [types.DECREASE] (state) {
    state.count -= 1
  },
  [types.RESET] (state) {
    state.count = 0
  },
  [types.INIT] (state, num) {
    state.init = true
    state.count = num
  }
}
