import axios from 'axios'
import store from '@/store'

const state = {
  test: null
}

const getters = {
  test (state) {
    return state.test
  },
}

const mutations = {
  setTest (state, test) {
    state.test = test
  }
}

const actions = {
  async loadTest ({ commit }) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_API_URL}/test`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      commit('setTest', response.data)
    }
    catch (error) {
      console.log(error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
