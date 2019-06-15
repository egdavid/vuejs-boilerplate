import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import VueProgressBar from 'vue-progressbar'

import App from '@/App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from '@/store'
import router from '@/router'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.use(VueProgressBar, {
  color: '#4fc08d',
  failedColor: '#ff0000',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 500
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})

Vue.prototype.$appName = process.env.VUE_APP_NAME
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
