import Authenticator from '@/lib/Authenticator'
import axios from 'axios'
import store from '@/store'

const auth = new Authenticator()

const state = {
  authenticated: null,
  profile: null,
}

const getters = {
  authenticated (state) {
    return state.authenticated
  },
  profile (state) {
    return state.profile
  }
}

const mutations = {
  authenticated (state, data) {
    state.authenticated = true
    state.profile = data
  },

  logout (state) {
    state.authenticated = false
    state.profile = null
  }
}

const actions = {
  login (state, authData) {
    store.dispatch('handleAuthentication', authData)
  },

  logout ({ commit }) {
    commit('logout')
    auth.logout()
  },

  handleAuthentication ({ commit }, authData) {
    auth.handleAuthentication().then(sessionData => {
      commit('authenticated', { username: authData.login })
    }).catch(err => {
      console.log(err)
    })
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}
