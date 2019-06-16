import Authenticator from '@/lib/Authenticator'
import axios from 'axios'
import store from '@/store'

const auth = new Authenticator()

const state = {
  authenticated: null,
  accessToken: null,
  idToken: null,
  expiresAt: null,
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
    state.accessToken = data.session.accessToken
    state.idToken = data.session.idToken
    state.expiresAt = data.session.expiresIn * 1000 + new Date().getTime()
    state.profile = data.auth
  },

  logout (state) {
    state.authenticated = false
    state.accessToken = null
    state.idToken = null
    state.expiresAt = null
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
      commit('authenticated', {session: sessionData, auth: { username: authData.login } })
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
