import Vue from "vue";
import Vuex from "vuex";

import header from './modules/header';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header
  }
});
