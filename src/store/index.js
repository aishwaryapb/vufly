import Vue from "vue";
import Vuex from "vuex";

import header from './modules/header';
import pricing from './modules/pricing';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header,
    pricing
  }
});
