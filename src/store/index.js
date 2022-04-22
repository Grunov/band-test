import Vue from 'vue';
import Vuex from 'vuex';
import usersModule from './modules/users.module';
import beersModule from './modules/beers.module';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users: usersModule,
    beers: beersModule
  }
})
