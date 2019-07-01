import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import session from "./modules/session";
import module from "./modules/module";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  modules: {
    session,
    module
  }
});
