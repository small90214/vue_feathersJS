import * as types from './mutation_type.js'
import * as api from '../api'

export const updateCount = async ({ commit, state }) => {
  let count = await api.counts.update(1, {
    num: state.count
  })
  console.log('update:' + count)
}

export const initCount = async ({ commit }) => {
  // let countData;
  let counts = await api.counts.find({
    query: {
      _id: 1
    }
  })
  console.log(counts)
  let num
  if (counts.total === 0) {
    let count = await api.counts.create({
      _id: 1,
      num: 0
    })
    console.log(count)
    num = count.num
  }
  else {
    num = counts.data[0].num
  }
  commit(types.INIT, num)
}
